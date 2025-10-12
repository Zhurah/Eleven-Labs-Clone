# Documentation de l'API

## Base URL

```
http://localhost:8000
```

## Endpoints

### POST /tts

Génère un fichier audio à partir d'un texte.

#### Request

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "text": "Texte à synthétiser",
  "voice": "af_sky",
  "speed": 1.0
}
```

**Paramètres:**

| Paramètre | Type | Requis | Défaut | Description |
|-----------|------|--------|--------|-------------|
| text | string | Oui | - | Texte à convertir en audio (max 500 caractères) |
| voice | string | Non | "af" | ID de la voix à utiliser |
| speed | float | Non | 1.0 | Vitesse de parole (0.5 = lent, 2.0 = rapide) |

#### Response

**Success (200 OK):**

Retourne un fichier audio WAV.

```
Content-Type: audio/wav
Content-Disposition: attachment; filename="output.wav"
```

**Errors:**

| Code | Description |
|------|-------------|
| 400 | Texte vide ou trop long |
| 404 | Voix non trouvée |
| 500 | Erreur de génération |

**Exemple d'erreur:**
```json
{
  "detail": "Text cannot be empty"
}
```

#### Exemples

**cURL:**
```bash
curl -X POST "http://localhost:8000/tts" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Bonjour le monde",
    "voice": "af_sky",
    "speed": 1.0
  }' \
  --output audio.wav
```

**Python:**
```python
import requests

response = requests.post(
    "http://localhost:8000/tts",
    json={
        "text": "Bonjour le monde",
        "voice": "af_sky",
        "speed": 1.0
    }
)

with open("audio.wav", "wb") as f:
    f.write(response.content)
```

**JavaScript:**
```javascript
const response = await fetch('http://localhost:8000/tts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    text: 'Bonjour le monde',
    voice: 'af_sky',
    speed: 1.0
  })
});

const blob = await response.blob();
const url = URL.createObjectURL(blob);
```

**TypeScript (axios):**
```typescript
import axios from 'axios';

const response = await axios.post(
  'http://localhost:8000/tts',
  {
    text: 'Bonjour le monde',
    voice: 'af_sky',
    speed: 1.0
  },
  {
    responseType: 'blob'
  }
);

const audioUrl = URL.createObjectURL(new Blob([response.data]));
```

## Voix disponibles

### Voix féminines américaines

| ID | Description |
|----|-------------|
| af | Voix féminine américaine générique |
| af_sky | Voix claire et naturelle |
| af_bella | Voix douce et expressive |
| af_sarah | Voix professionnelle |
| af_nicole | Voix chaleureuse |

### Voix féminines britanniques

| ID | Description |
|----|-------------|
| bf_emma | Accent britannique raffiné |
| bf_isabella | Accent britannique élégant |

### Voix masculines américaines

| ID | Description |
|----|-------------|
| am_adam | Voix masculine professionnelle |
| am_michael | Voix masculine énergique |

### Voix masculines britanniques

| ID | Description |
|----|-------------|
| bm_george | Accent britannique distingué |
| bm_lewis | Accent britannique moderne |

## Limites et contraintes

- **Taille maximale du texte:** 500 caractères par défaut (configurable)
- **Format de sortie:** WAV, 24kHz, mono
- **Rate limiting:** Aucune limite par défaut
- **Timeout:** 60 secondes

## Documentation interactive

Une documentation interactive Swagger est disponible à :

```
http://localhost:8000/docs
```

Vous pouvez y tester directement les endpoints avec une interface graphique.

## Codes d'erreur détaillés

### 400 Bad Request

**Text cannot be empty**
```json
{
  "detail": "Text cannot be empty"
}
```

**Text too long**
```json
{
  "detail": "Text too long (max 500 characters)"
}
```

### 404 Not Found

**Voice not found**
```json
{
  "detail": "Voice 'invalid_voice' not found"
}
```

### 500 Internal Server Error

**Generation error**
```json
{
  "detail": "Error generating audio"
}
```

**Model not loaded**
```json
{
  "detail": "Model not loaded"
}
```

## Monitoring

### Health check

Le serveur démarre avec un message de log :

```
INFO: Application startup complete.
INFO: Model loaded successfully.
```

### Logs de génération

Chaque génération réussie produit un log :

```
INFO: Generated TTS for 'af_sky' (42 chars)
```
