# 2️⃣ Build the model and load the default voicepack
from .models import build_model
import torch
device = 'cuda' if torch.cuda.is_available() else 'cpu'

import os

# Get the current working directory
script_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(script_dir, "kokoro-v0_19.pth")

MODEL = build_model(model_path, device)
VOICE_NAME = [
    'af', # Default voice is a 50-50 mix of Bella & Sarah
    'af_bella', 'af_sarah', 'am_adam', 'am_michael',
    'bf_emma', 'bf_isabella', 'bm_george', 'bm_lewis',
    'af_nicole', 'af_sky',
][0]
VOICEPACK = torch.load(f'{script_dir}/voices/{VOICE_NAME}.pt', weights_only=True).to(device)
print(f'Loaded voice: {VOICE_NAME}')

# 3️⃣ Call generate, which returns 24khz audio and the phonemes used
from .kokoro import generate
from scipy.io.wavfile import write

def generate_and_save_audio(text):
    audio, out_ps = generate(MODEL, text, VOICEPACK, lang=VOICE_NAME[0])
    write('output.wav', 24000, audio)

def generate_audio(text):
    audio, out_ps = generate(MODEL, text, VOICEPACK, lang=VOICE_NAME[0])
    return audio
