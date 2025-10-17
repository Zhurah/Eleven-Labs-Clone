# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an ElevenLabs-inspired text-to-speech (TTS) clone built with Kokoro TTS, featuring a FastAPI backend and multiple React frontends. The project supports 11 different voices (American/British, male/female) and generates high-quality 24kHz WAV audio files.

**Key Components:**
- **Backend**: FastAPI server (`backend/`) with Kokoro TTS model integration
- **Frontend**: React 19 + TypeScript application (`frontend/`) for TTS generation
- **Landing**: Marketing/landing page (`landing/`) - separate React 18 app with Tailwind CSS + Framer Motion
- **Kokoro**: Vendored TTS model (`backend/kokoro/`) - 640MB PyTorch model file managed via Git LFS

## Quick Reference

### Essential Commands

```bash
# Initial Setup
git lfs install && git lfs pull              # Download model file (640MB)

# Backend
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload                # Start backend on :8000

# Frontend
cd frontend
npm install
npm run dev                                  # Start frontend on :5173

# Landing Page
cd landing
npm install
npm run dev                                  # Start landing page

# Docker (entire stack)
docker-compose up -d                         # Start all services
docker-compose logs -f                       # View logs
docker-compose down                          # Stop all services
```

### Key Files to Know

- `backend/app/main.py:48` - Model loading logic (lifespan manager)
- `backend/app/main.py:82` - Main `/tts` endpoint implementation
- `backend/app/config.py` - All configuration constants
- `frontend/src/App.tsx:19` - API URL configuration
- `docker-compose.yml` - Service orchestration
- `.env.example` - Environment variables template

## Architecture

### Backend Architecture (`backend/`)

The backend follows a simple FastAPI structure with global model loading:

- **`app/main.py`**: FastAPI application entry point with lifespan management
  - Uses `@asynccontextmanager` for model loading on startup
  - Global `MODEL` variable holds the loaded Kokoro model
  - Device selection: MPS (Mac M1/M2) > CPU
  - Single `/tts` POST endpoint that loads voice files dynamically

- **`app/config.py`**: Centralized configuration (paths and constants)
  - `MODEL_PATH`: Path to `kokoro-v0_19.pth` (640MB model file)
  - `VOICE_DIR`: Directory containing voice `.pt` files
  - `MAX_CHARS`: Character limit (500 chars)
  - `SAMPLE_RATE`: 24000 Hz
  - `DEFAULT_VOICE`: "af" (default voice)
  - `DEFAULT_SPEED`: 1.0 (normal speed)

- **`app/tts_service.py`**: Alternative service layer (not currently used by main.py)
  - Provides `init_model()` and `synthesize()` functions
  - Can be used for refactoring or alternative implementations

- **`app/Voices/`**: Voice pack directory containing `.pt` files for each voice
  - 11 voice packs: `af.pt`, `af_sky.pt`, `af_bella.pt`, `af_sarah.pt`, `af_nicole.pt`, `bf_emma.pt`, `bf_isabella.pt`, `am_adam.pt`, `am_michael.pt`, `bm_george.pt`, `bm_lewis.pt`
  - Each file is ~500KB
  - Loaded dynamically per request via `torch.load()` with `weights_only=True`

- **`kokoro/`**: Vendored Kokoro TTS module (third-party library)
  - `models.py`: Neural network architectures (TextEncoder, StyleEncoder, Decoder)
  - `kokoro.py`: `generate()` function for text-to-speech generation
  - `istftnet.py`: Vocoder implementation
  - `plbert.py`: Phoneme BERT model
  - `kokoro-v0_19.pth`: Main model weights (640MB, Git LFS tracked)
  - `kokoro-v0_19.onnx`: Alternative ONNX format (345MB, optional)

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
- Built with Vite + React 18 + TypeScript
- Uses Tailwind CSS + Framer Motion for animations
- Independent from main frontend app
- Component structure (`src/components/`):
  - `Hero.tsx`: Above-the-fold hero section
  - `Problem.tsx`: Problem statement section
  - `Features.tsx`: Feature showcase
  - `Demo.tsx`: Interactive demo section
  - `Comparison.tsx`: Competitor comparison
  - `UseCases.tsx`: Use case examples
  - `Testimonials.tsx`: Customer testimonials
  - `Pricing.tsx`: Pricing tiers
  - `FAQ.tsx`: Frequently asked questions
  - `CTA.tsx`: Call-to-action section
  - `Footer.tsx`: Footer with links

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

### Model Loading & Lifecycle
- The Kokoro model (`kokoro-v0_19.pth`) is ~640MB and loaded once at server startup
- Requires Git LFS to pull the model file: `git lfs pull`
- Model loading happens in `lifespan()` context manager at `main.py:48`
- Uses `@asynccontextmanager` to handle startup and shutdown
- Global `MODEL` variable holds the loaded model instance
- Model is set to `None` on application shutdown for cleanup

### Device Selection
- Backend automatically detects and uses MPS (Apple Silicon) if available
- Falls back to CPU if MPS unavailable
- Device set in `main.py:40`: `DEVICE = "mps" if torch.backends.mps.is_available() else "cpu"`
- Device choice affects performance significantly:
  - MPS (Apple M1/M2): 2-3 seconds for 50 words
  - CPU: 8-12 seconds for 50 words

### Voice System
- 11 voice packs stored as `.pt` files in `backend/app/Voices/`
- Each voice file is ~500KB (much smaller than main model)
- Voices loaded per-request (not at startup) in `main.py:101`
- Uses `torch.load(voice_file, weights_only=True)` for security
- Voice tensor moved to correct device: `.to(DEVICE)`
- Voice IDs: `af`, `af_sky`, `af_bella`, `af_sarah`, `af_nicole`, `bf_emma`, `bf_isabella`, `am_adam`, `am_michael`, `bm_george`, `bm_lewis`

### API Request Flow
1. Client sends POST to `/tts` with `{text, voice, speed}`
2. Backend validates:
   - Model is loaded (`main.py:85`)
   - Text is not empty (`main.py:89`)
   - Text length ≤ MAX_CHARS=500 (`main.py:91`)
   - Voice file exists (`main.py:96`)
3. Loads specified voice pack from `Voices/` directory (`main.py:101`)
4. Calls `generate()` from `kokoro.kokoro` module (`main.py:104`)
5. Writes WAV to temporary file via `soundfile` (`main.py:112`)
6. Returns `FileResponse` with audio/wav MIME type (`main.py:116`)
7. Temporary file cleanup handled by OS

### Frontend Configuration
- API URL hardcoded in `frontend/src/App.tsx:19`: `const API_URL = 'http://localhost:8000'`
- MAX_CHARACTERS frontend limit: 5000 (more permissive than backend's 500)
- Frontend uses Axios for HTTP requests with error handling
- Audio playback via browser's `Audio()` API with blob URLs

### CORS Configuration
- Backend allows all origins: `allow_origins=["*"]` in `main.py:72`
- Configured for development; should be restricted in production
- Allows all methods and headers for maximum compatibility

### Security Considerations
- Uses `torch.load(..., weights_only=True)` to prevent code execution attacks
- No authentication implemented (development only)
- CORS set to allow all origins (development only)
- No rate limiting (should be added for production)

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

## Common Issues & Troubleshooting

### Git LFS Issues

**Problem**: "Model not found" or model file is only a few KB
**Solution**:
```bash
git lfs install
git lfs pull
```
The `kokoro-v0_19.pth` file should be ~640MB. If it's smaller, Git LFS didn't download the actual file.

### Backend Issues

**Problem**: Backend won't start or crashes on startup
**Solutions**:
1. Ensure Python 3.11+ is installed: `python --version`
2. Verify virtual environment is activated: `which python` should point to `.venv`
3. Check all dependencies installed: `pip install -r requirements.txt`
4. Verify model file exists and is correct size: `ls -lh backend/kokoro/kokoro-v0_19.pth`
5. Check device compatibility: If MPS fails, backend will fall back to CPU automatically

**Problem**: Import errors from `kokoro` module
**Solution**: The `kokoro` module is vendored in `backend/kokoro/`. Ensure you're running from the `backend/` directory or that paths are correct.

### Frontend Issues

**Problem**: Frontend can't connect to backend / CORS errors
**Solutions**:
1. Verify backend is running: `curl http://localhost:8000/docs`
2. Check API_URL in `frontend/src/App.tsx:19` matches backend URL
3. CORS is configured to allow all origins in `main.py:72` - should work by default

**Problem**: npm install fails
**Solution**: Ensure Node.js 20+ is installed: `node --version`

### Performance Issues

**Problem**: Slow audio generation (>10 seconds)
**Solutions**:
1. Check device being used: Look for "Using device: mps" or "Using device: cpu" in logs
2. On Apple Silicon Macs, MPS should give 3-5x speedup over CPU
3. First generation after startup is slower due to model warmup
4. Consider reducing text length (stays under MAX_CHARS=500)

**Problem**: High memory usage
**Solution**: This is expected - the model is ~640MB and requires additional memory for inference. Minimum 4GB RAM recommended.

### Docker Issues

**Problem**: Docker containers won't start
**Solutions**:
1. Ensure Git LFS pulled model before building: `git lfs pull`
2. Check Docker has enough resources allocated (4GB+ memory)
3. View logs: `docker-compose logs -f backend`
4. Rebuild containers: `docker-compose down && docker-compose up -d --build`
