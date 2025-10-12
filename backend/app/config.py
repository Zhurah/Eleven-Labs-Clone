import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(BASE_DIR)

MODEL_PATH = os.path.join(ROOT_DIR, "kokoro", "kokoro-v0_19.pth")
VOICE_DIR = os.path.join(BASE_DIR, "Voices")

SAMPLE_RATE = 24000
MAX_CHARS = 500
DEFAULT_VOICE = "af"
DEFAULT_SPEED = 1.0

