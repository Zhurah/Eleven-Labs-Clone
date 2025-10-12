# Clone ElevenLabs - Text-to-Speech avec Kokoro

Un clone de synthèse vocale inspiré d'ElevenLabs, utilisant le modèle Kokoro TTS. Ce projet comprend une API backend FastAPI et une interface web React moderne.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.8%2B-blue)
![Node](https://img.shields.io/badge/node-20%2B-green)

## ✨ Fonctionnalités

- 🎙️ **11 voix différentes** (américaines et britanniques, hommes et femmes)
- ⚡ **Génération rapide** avec accélération GPU (MPS pour Mac M1/M2)
- 🎨 **Interface web moderne** avec React + TypeScript
- 📦 **API REST** complète et documentée
- 🔊 **Qualité audio** 24kHz WAV
- ⚙️ **Contrôle de la vitesse** de parole

## 📁 Structure du projet

```
Clone-Eleven-Labs/
├── backend/              # API FastAPI + Modèle Kokoro
│   ├── app/
│   │   ├── main.py      # Point d'entrée API
│   │   ├── config.py    # Configuration
│   │   └── Voices/      # Fichiers de voix (.pt)
│   ├── kokoro/          # Module Kokoro TTS
│   │   ├── models.py
│   │   ├── kokoro.py
│   │   └── kokoro-v0_19.pth  # Modèle (640MB)
│   └── requirements.txt
├── frontend/             # Interface React
│   ├── src/
│   │   ├── App.tsx      # Application principale
│   │   └── types.ts     # Types TypeScript
│   ├── package.json
│   └── vite.config.ts
├── docs/                 # Documentation
├── docker-compose.yml    # Configuration Docker
└── README.md            # Ce fichier

```

## 🚀 Installation rapide

### Prérequis

- **Python** 3.8+
- **Node.js** 20.19+ ou 22.12+
- **Git** et **Git LFS** (pour les fichiers modèles volumineux)

### Option 1 : Installation manuelle

#### Backend

```bash
# Cloner le repo
git clone https://github.com/votre-username/Clone-Eleven-Labs.git
cd Clone-Eleven-Labs

# Configurer le backend
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Lancer l'API
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

L'API sera disponible sur http://localhost:8000

#### Frontend

```bash
# Dans un nouveau terminal
cd frontend
npm install

# Lancer le serveur de développement
npm run dev
```

L'interface sera disponible sur http://localhost:5173

### Option 2 : Docker (recommandé)

```bash
# Lancer l'ensemble du stack
docker-compose up -d

# Accéder à l'application
# Frontend: http://localhost:5173
# Backend: http://localhost:8000
# Documentation API: http://localhost:8000/docs
```

## 📖 Utilisation

### Interface Web

1. Ouvrez http://localhost:5173
2. Sélectionnez une voix dans le menu déroulant
3. Entrez votre texte (max 5000 caractères)
4. Cliquez sur "Générer l'audio"
5. Écoutez et téléchargez le résultat

### API REST

#### Générer de l'audio

```bash
curl -X POST "http://localhost:8000/tts" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Bonjour, ceci est un test",
    "voice": "af_sky",
    "speed": 1.0
  }' \
  --output audio.wav
```

#### Paramètres disponibles

- `text` (string, requis) : Texte à synthétiser
- `voice` (string, optionnel) : ID de la voix (défaut: "af")
- `speed` (float, optionnel) : Vitesse de parole (défaut: 1.0)

### Voix disponibles

| Voice ID | Description |
|----------|-------------|
| `af` / `af_sky` / `af_bella` / `af_sarah` / `af_nicole` | Femme américaine |
| `bf_emma` / `bf_isabella` | Femme britannique |
| `am_adam` / `am_michael` | Homme américain |
| `bm_george` / `bm_lewis` | Homme britannique |

## ⚙️ Configuration

### Backend

Éditez `backend/app/config.py` :

```python
MODEL_PATH = os.path.join(ROOT_DIR, "kokoro", "kokoro-v0_19.pth")
VOICE_DIR = os.path.join(BASE_DIR, "Voices")
SAMPLE_RATE = 24000
MAX_CHARS = 500  # Limite de caractères
DEFAULT_VOICE = "af"
DEFAULT_SPEED = 1.0
```

### Frontend

L'URL de l'API est configurée dans `frontend/src/App.tsx` :

```typescript
const API_URL = 'http://localhost:8000';
```

## 🛠️ Technologies utilisées

### Backend
- **FastAPI** - Framework web moderne et performant
- **PyTorch** - Deep learning et inférence
- **Kokoro TTS** - Moteur de synthèse vocale
- **soundfile** - Manipulation audio
- **Uvicorn** - Serveur ASGI

### Frontend
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **Axios** - Client HTTP

## 📊 Performances

- **Temps de génération** : ~2-3 secondes pour 50 mots (avec MPS)
- **Qualité audio** : 24kHz, mono, WAV
- **Taille du modèle** : ~640MB (PyTorch), ~345MB (ONNX)

## 🐛 Dépannage

### Le backend ne démarre pas

```bash
# Vérifier que l'environnement virtuel est activé
which python  # Doit pointer vers .venv/bin/python

# Réinstaller les dépendances
pip install --upgrade -r requirements.txt
```

### Erreur "Model not found"

Le fichier `kokoro-v0_19.pth` doit être présent dans `backend/kokoro/`. Si vous utilisez Git LFS, exécutez :

```bash
git lfs pull
```

### Le frontend ne se connecte pas au backend

Vérifiez que :
1. Le backend est démarré sur le port 8000
2. Les CORS sont correctement configurés dans `backend/app/main.py`
3. L'URL de l'API est correcte dans `frontend/src/App.tsx`

## 🤝 Contribution

Les contributions sont les bienvenues ! Merci de :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add: AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- [Kokoro TTS](https://github.com/hexgrad/kokoro) - Le modèle de synthèse vocale
- [ElevenLabs](https://elevenlabs.io) - Inspiration pour l'interface
- [FastAPI](https://fastapi.tiangolo.com) - Framework backend
- [React](https://react.dev) - Bibliothèque frontend

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

⭐ N'oubliez pas de mettre une étoile si ce projet vous a été utile !
