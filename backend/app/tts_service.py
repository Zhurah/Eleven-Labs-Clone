import os
import torch
import numpy as np
from typing import Tuple
from .config import MODEL_PATH, VOICE_DIR
# imports Kokoro ; ajuste si nécessaire
from kokoro.kokoro.models import build_model
from kokoro.kokoro.kokoro import generate

_device = None
_MODEL = None

def init_model(device: str = None):
    global _device, _MODEL
    if _MODEL is not None:
        return _MODEL
    device = device or ("mps" if torch.backends.mps.is_available() else "cpu")
    _device = device
    _MODEL = build_model(MODEL_PATH, device)
    return _MODEL

def _load_voicepack(voice_name: str):
    path = os.path.join(VOICE_DIR, f"{voice_name}.pt")
    if not os.path.exists(path):
        raise ValueError(f"Voicepack not found: {path}")
    vp = torch.load(path, weights_only=True)
    
    if hasattr(vp, "to"):
        vp = vp.to(_device)
    return vp

def synthesize(text: str, voice: str = "af", language: str = "a", speed: float = 1.0) -> np.ndarray:
    """Return a numpy ndarray of the audio (shape (n_samples,)) at 24000 Hz"""
    if _MODEL is None:
        raise ValueError("Model not initialized. Call init_model() first.")
    voicepack = _load_voicepack(voice)
    audio, _ = generate(_MODEL, text, voicepack, lang=language, speed=speed)
    
    if hasattr(audio, "cpu"):
        audio = audio.cpu().numpy()
    return audio