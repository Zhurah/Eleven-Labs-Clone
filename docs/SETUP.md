# Guide d'installation détaillé

## Table des matières
- [Installation locale](#installation-locale)
- [Installation avec Docker](#installation-avec-docker)
- [Configuration Git LFS](#configuration-git-lfs)
- [Problèmes courants](#problèmes-courants)

## Installation locale

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/Clone-Eleven-Labs.git
cd Clone-Eleven-Labs
```

### 2. Installer Git LFS (si pas déjà fait)

Les fichiers modèles sont volumineux et utilisent Git LFS :

```bash
# macOS
brew install git-lfs

# Ubuntu/Debian
sudo apt-get install git-lfs

# Windows
# Télécharger depuis https://git-lfs.github.com/
```

Puis initialiser :

```bash
git lfs install
git lfs pull
```

### 3. Configuration du Backend

```bash
cd backend

# Créer l'environnement virtuel
python -m venv .venv

# Activer l'environnement
# macOS/Linux:
source .venv/bin/activate
# Windows:
.venv\Scripts\activate

# Installer les dépendances
pip install -r requirements.txt
```

### 4. Configuration du Frontend

```bash
cd frontend

# Installer les dépendances
npm install
```

### 5. Lancement

**Terminal 1 - Backend:**
```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Accédez à :
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- Documentation API: http://localhost:8000/docs

## Installation avec Docker

### Prérequis
- Docker Desktop installé
- Docker Compose v2+

### Lancement complet

```bash
# Cloner et entrer dans le projet
git clone https://github.com/votre-username/Clone-Eleven-Labs.git
cd Clone-Eleven-Labs

# Lancer avec Docker Compose
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter les services
docker-compose down
```

Les services seront disponibles sur :
- Frontend: http://localhost:5173
- Backend: http://localhost:8000

### Rebuild après modifications

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Configuration Git LFS

### Vérifier l'installation

```bash
git lfs version
# Doit afficher: git-lfs/x.x.x
```

### Télécharger les fichiers modèles

```bash
git lfs pull
```

### Taille des fichiers

Les fichiers suivants sont trackés par LFS :
- `backend/kokoro/kokoro-v0_19.pth` (~640MB)
- `backend/kokoro/kokoro-v0_19.onnx` (~345MB)
- `backend/kokoro/fp16/kokoro-v0_19-half.pth` (~320MB)
- `backend/app/Voices/*.pt` (~500KB chacun)

## Problèmes courants

### Backend ne démarre pas

**Erreur: Module not found 'fastapi'**

```bash
# Vérifier que l'environnement virtuel est activé
which python  # Doit pointer vers .venv/bin/python

# Réinstaller les dépendances
pip install --upgrade -r requirements.txt
```

**Erreur: Model not found**

```bash
# Vérifier que Git LFS a téléchargé les fichiers
git lfs pull

# Vérifier la présence du modèle
ls -lh backend/kokoro/kokoro-v0_19.pth
```

### Frontend ne démarre pas

**Erreur: Cannot find module**

```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

**Port 5173 déjà utilisé**

```bash
# Modifier le port dans vite.config.ts
# ou tuer le processus existant
lsof -ti:5173 | xargs kill -9
```

### Docker ne build pas

**Erreur: Cannot pull image**

```bash
# Vérifier Docker
docker --version
docker-compose --version

# Nettoyer et rebuild
docker system prune -a
docker-compose build --no-cache
```

### Erreurs CORS

Si le frontend ne peut pas se connecter au backend :

1. Vérifier que le backend est lancé sur le port 8000
2. Vérifier la configuration CORS dans `backend/app/main.py`
3. Vérifier l'URL de l'API dans `frontend/src/App.tsx`

### Performance lente

**Mac M1/M2:**
Le backend utilise MPS (Metal Performance Shaders) pour l'accélération. Si MPS n'est pas disponible, il utilisera le CPU (plus lent).

**Solutions:**
- Mettre à jour PyTorch : `pip install --upgrade torch`
- Vérifier les logs au démarrage : `Using device: mps` ou `Using device: cpu`

### Audio ne se génère pas

**Vérifier les logs backend:**
```bash
# Les logs doivent afficher:
# INFO: Generated TTS for 'voice_name' (X chars)
```

**Tester l'API directement:**
```bash
curl -X POST "http://localhost:8000/tts" \
  -H "Content-Type: application/json" \
  -d '{"text":"Test","voice":"af_sky","speed":1.0}' \
  --output test.wav
```

## Support

Pour toute question ou problème :
1. Vérifiez les [issues GitHub](https://github.com/votre-username/Clone-Eleven-Labs/issues)
2. Ouvrez une nouvelle issue avec :
   - Description du problème
   - Logs d'erreur
   - Environnement (OS, versions)
   - Étapes pour reproduire
