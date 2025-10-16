# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an ElevenLabs-inspired text-to-speech (TTS) clone built with Kokoro TTS, featuring a FastAPI backend and multiple React frontends. The project supports 11 different voices (American/British, male/female) and generates high-quality 24kHz WAV audio files.

**Key Components:**
- **Backend**: FastAPI server with Kokoro TTS model integration
- **Frontend**: React + TypeScript application for TTS generation
- **Landing**: Marketing/landing page (separate React app with Tailwind + Framer Motion)
- **Kokoro**: Third-party TTS model (640MB PyTorch model, also available as 345MB ONNX)

## Architecture

### Backend Architecture (`backend/`)

The backend follows a simple FastAPI structure with global model loading:

- **`app/main.py`**: FastAPI application entry point with lifespan management
  - Uses `@asynccontextmanager` for model loading on startup
  - Global `MODEL` variable holds the loaded Kokoro model
  - Device selection: MPS (Mac M1/M2) > CPU
  - Single `/tts` POST endpoint that loads voice files dynamically

- **`app/config.py`**: Centralized configuration
  - `MODEL_PATH`: Path to `kokoro-v0_19.pth` (640MB model file)
  - `VOICE_DIR`: Directory containing voice .pt files
  - `MAX_CHARS`: Character limit (default 500)
  - `SAMPLE_RATE`: 24000 Hz

- **`app/Voices/`**: Voice pack directory containing `.pt` files for each voice
  - 11 voice packs: `af.pt`, `af_sky.pt`, `am_adam.pt`, etc.
  - Loaded dynamically per request via `torch.load()`

- **`kokoro/`**: Vendored Kokoro TTS module
  - `models.py`: Neural network architectures (TextEncoder, StyleEncoder, Decoder)
  - `kokoro.py`: `generate()` function for text-to-speech generation
  - `kokoro-v0_19.pth`: Main model weights
  - `kokoro-v0_19.onnx`: Alternative ONNX format

**Key Backend Pattern:**
- Model loads once at startup (expensive operation)
- Voice packs load per-request (lightweight `.pt` files)
- Returns temporary WAV file via `FileResponse`

### Frontend Architecture (`frontend/`)

Simple single-page React application:

- **`src/App.tsx`**: Main application component
  - Hardcoded list of 11 Kokoro voices
  - Makes POST requests to `http://localhost:8000/tts`
  - Handles audio blob responses and creates playback URLs
  - Character limit: 5000 (frontend) vs 500 (backend)

- **API Integration**: Uses Axios for POST requests to `/tts`
  ```typescript
  { text: string, voice: string, speed: float }
  ```

### Landing Page (`landing/`)

Separate React application for marketing:
- Built with Vite + React 18
- Uses Tailwind CSS + Framer Motion for animations
- Independent from main frontend app

## Development Commands

### Backend Development

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Run development server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Access API docs
# http://localhost:8000/docs
```

### Frontend Development

```bash
cd frontend
npm install
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Landing Page Development

```bash
cd landing
npm install
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Lint TypeScript/TSX files
```

### Docker Development

```bash
# Start entire stack
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild after changes
docker-compose up -d --build
```

**Docker URLs:**
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

## Important Technical Details

### Model Loading
- The Kokoro model (`kokoro-v0_19.pth`) is ~640MB and loaded once at server startup
- Requires Git LFS to pull the model file: `git lfs pull`
- Model loading happens in `lifespan()` context manager in `main.py:48`

### Device Selection
- Backend automatically detects and uses MPS (Apple Silicon) if available
- Falls back to CPU if MPS unavailable
- Device set in `main.py:40`: `DEVICE = "mps" if torch.backends.mps.is_available() else "cpu"`

### Voice System
- 11 voice packs stored as `.pt` files in `backend/app/Voices/`
- Voices loaded per-request (not at startup) in `main.py:101`
- Voice IDs: `af`, `af_sky`, `af_bella`, `af_sarah`, `af_nicole`, `bf_emma`, `bf_isabella`, `am_adam`, `am_michael`, `bm_george`, `bm_lewis`

### API Request Flow
1. Client sends POST to `/tts` with `{text, voice, speed}`
2. Backend validates text length (MAX_CHARS = 500)
3. Loads specified voice pack from `Voices/` directory
4. Calls `generate()` from `kokoro.kokoro` module
5. Writes WAV to temporary file via `soundfile`
6. Returns `FileResponse` with audio/wav MIME type

### Frontend API Configuration
- API URL hardcoded in `frontend/src/App.tsx:19`: `const API_URL = 'http://localhost:8000'`
- Change this when deploying or using different backend URL

### CORS Configuration
- Backend allows all origins: `allow_origins=["*"]` in `main.py:72`
- Configured for development; restrict in production

## Repository Structure Notes

- Main branch: `main`
- Current working branch: `add-landing-page`
- Documentation in `docs/` directory
- `.env.example` provided for environment configuration
- Uses Git LFS for large model files (`.gitattributes`)

## Testing the TTS Endpoint

```bash
# Simple test
curl -X POST "http://localhost:8000/tts" \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello world", "voice": "af_sky", "speed": 1.0}' \
  --output test.wav

# Play the audio (macOS)
afplay test.wav
```

## Common Issues

**"Model not found"**: Run `git lfs pull` to download the 640MB model file

**Backend won't start**: Ensure Python 3.8+ and all dependencies installed in virtual environment

**Frontend can't connect**: Verify backend is running on port 8000 and CORS is configured

**Slow generation**: First generation is slow due to model initialization; subsequent requests are faster with MPS/GPU acceleration
