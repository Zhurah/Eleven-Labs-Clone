from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from contextlib import asynccontextmanager
import logging
import os
import torch
import soundfile as sf
import tempfile
from kokoro.models import build_model
from kokoro.kokoro import generate
from .config import MODEL_PATH, VOICE_DIR, SAMPLE_RATE, MAX_CHARS, DEFAULT_VOICE, DEFAULT_SPEED


# ======================
# --- Logging setup ---
# ======================
logger = logging.getLogger("kokoro_api")
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
formatter = logging.Formatter("%(asctime)s %(levelname)s %(message)s")
handler.setFormatter(formatter)
logger.addHandler(handler)


# ======================
# --- API input model ---
# ======================
class TTSRequest(BaseModel):
    text: str
    voice: str = DEFAULT_VOICE
    speed: float = DEFAULT_SPEED


# ======================
# --- Globals ---
# ======================
MODEL = None
DEVICE = "mps" if torch.backends.mps.is_available() else "cpu"
logger.info(f"Using device: {DEVICE}")


# ======================
# --- Lifespan events ---
# ======================
@asynccontextmanager
async def lifespan(app: FastAPI):
    global MODEL
    logger.info("Startup: loading Kokoro model...")
    try:
        MODEL = build_model(MODEL_PATH, DEVICE)
        logger.info("Model loaded successfully.")
    except Exception as e:
        logger.exception("Failed to load model: %s", e)
        raise e
    yield
    logger.info("Shutdown: cleaning up...")
    MODEL = None


# ======================
# --- FastAPI app ---
# ======================
app = FastAPI(title="Kokoro TTS API", lifespan=lifespan)

# ======================
# --- CORS middleware ---
# ======================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for API usage
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ======================
# --- /tts endpoint ---
# ======================
@app.post("/tts")
async def tts(request: TTSRequest):
    global MODEL
    if MODEL is None:
        raise HTTPException(status_code=500, detail="Model not loaded")

    text = request.text.strip()
    if not text:
        raise HTTPException(status_code=400, detail="Text cannot be empty")
    if len(text) > MAX_CHARS:
        raise HTTPException(status_code=400, detail=f"Text too long (max {MAX_CHARS} characters)")

    # Chemin vers la voix
    voice_file = os.path.join(VOICE_DIR, f"{request.voice}.pt")
    if not os.path.exists(voice_file):
        raise HTTPException(status_code=404, detail=f"Voice '{request.voice}' not found")

    try:
        # Charger la voix
        voicepack = torch.load(voice_file, weights_only=True).to(DEVICE)

        # Inférence audio
        result = generate(MODEL, text, voicepack, lang='a', speed=request.speed)
        if result is None:
            raise HTTPException(status_code=400, detail="Failed to generate audio (no tokens)")

        audio, phonemes = result

        # Sauvegarde temporaire
        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmpfile:
            sf.write(tmpfile.name, audio, SAMPLE_RATE)
            tmp_path = tmpfile.name

        logger.info(f"Generated TTS for '{request.voice}' ({len(text)} chars)")
        return FileResponse(tmp_path, media_type="audio/wav", filename="output.wav")

    except Exception as e:
        logger.exception("Error during TTS generation: %s", e)
        raise HTTPException(status_code=500, detail="Error generating audio")
