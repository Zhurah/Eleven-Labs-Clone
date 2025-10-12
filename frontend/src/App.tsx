import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import './App.css';
import type {
  ApiError,
  Voice
} from './types';

function App() {
  // ===== ÉTATS TYPÉS =====
  const [text, setText] = useState<string>('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<Voice[]>([]);
  const [selectedClonedVoice, setSelectedClonedVoice] = useState<string>('');

  // ===== CONFIGURATION API =====
  const API_URL = 'http://localhost:8000';
  const MAX_CHARACTERS = 5000;

  // ===== VOIX KOKORO DISPONIBLES =====
  const KOKORO_VOICES: Voice[] = [
    { voice_id: 'af_bella' },
    { voice_id: 'af_nicole' },
    { voice_id: 'af_sarah' },
    { voice_id: 'af_sky' },
    { voice_id: 'af' },
    { voice_id: 'am_adam' },
    { voice_id: 'am_michael' },
    { voice_id: 'bf_emma' },
    { voice_id: 'bf_isabella' },
    { voice_id: 'bm_george' },
    { voice_id: 'bm_lewis' },
  ];

  // ===== CHARGER LES VOIX DISPONIBLES AU DÉMARRAGE =====
  useEffect(() => {
    // Charger les voix Kokoro
    setAvailableVoices(KOKORO_VOICES);
    if (!selectedClonedVoice && KOKORO_VOICES.length > 0) {
      setSelectedClonedVoice(KOKORO_VOICES[0].voice_id);
    }
  }, []);

  // ===== FONCTION : GÉNÉRER L'AUDIO =====
  const handleGenerate = async (): Promise<void> => {
    // Validation
    if (!text.trim()) {
      setError('Veuillez saisir du texte');
      return;
    }

    if (text.length > MAX_CHARACTERS) {
      setError(`Le texte ne doit pas dépasser ${MAX_CHARACTERS} caractères`);
      return;
    }

    if (!selectedClonedVoice) {
      setError('Veuillez sélectionner une voix');
      return;
    }

    // Réinitialisation
    setError(null);
    setAudioUrl(null);
    setLoading(true);

    try {
      // Préparer les données pour l'API Kokoro
      const requestData = {
        text,
        voice: selectedClonedVoice || 'af_bella',
        speed: 1.0
      };

      // Requête à l'API
      const response = await axios.post(
        `${API_URL}/tts`,
        requestData,
        {
          responseType: 'blob',
          timeout: 60000,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // Créer l'URL de l'audio
      const audioBlob = new Blob([response.data], { type: 'audio/wav' });
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);

    } catch (err) {
      console.error('Erreur complète:', err);
      
      // Gestion typée des erreurs
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<ApiError>;
        
        if (axiosError.response) {
          setError(
            axiosError.response.data?.message || 
            `Erreur ${axiosError.response.status}: ${axiosError.response.statusText}`
          );
        } else if (axiosError.request) {
          setError('Impossible de contacter le serveur. Vérifiez que votre API est lancée.');
        } else {
          setError(axiosError.message);
        }
      } else {
        setError('Une erreur inattendue s\'est produite');
      }
    } finally {
      setLoading(false);
    }
  };

  // ===== FONCTION : TÉLÉCHARGER L'AUDIO =====
  const handleDownload = (): void => {
    if (!audioUrl) return;

    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = `audio_${Date.now()}.wav`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ===== FONCTION : NETTOYER L'URL AUDIO =====
  useEffect(() => {
    // Libérer la mémoire quand le composant est démonté
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  // ===== INTERFACE UTILISATEUR =====
  return (
    <div className="app-container">
      <div className="card">
        {/* TITRE */}
        <h1>🎙️ Clone Eleven Labs with Kokoro</h1>
        <p className="subtitle">Synthèse vocale avec Kokoro TTS</p>

        {/* SÉLECTEUR DE VOIX */}
        {availableVoices.length > 0 && (
          <div className="cloned-voice-selector">
            <label htmlFor="voice-select">Choisir une voix :</label>
            <select
              id="voice-select"
              value={selectedClonedVoice}
              onChange={(e) => setSelectedClonedVoice(e.target.value)}
              className="voice-dropdown"
            >
              {availableVoices.map((voice) => (
                <option key={voice.voice_id} value={voice.voice_id}>
                  {voice.voice_id}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* ZONE DE TEXTE */}
        <textarea
          className="text-input"
          placeholder="Entrez le texte à synthétiser..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          disabled={loading}
          maxLength={MAX_CHARACTERS}
        />

        {/* COMPTEUR DE CARACTÈRES */}
        <div className="char-count">
          <span style={{ 
            color: text.length > MAX_CHARACTERS * 0.9 ? '#e74c3c' : '#999' 
          }}>
            {text.length} / {MAX_CHARACTERS} caractères
          </span>
        </div>

        {/* BOUTON GÉNÉRER */}
        <button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={loading || !text.trim() || !selectedClonedVoice}
        >
          {loading ? (
            <>
              <span className="spinner">⏳</span> Génération en cours...
            </>
          ) : (
            '🎵 Générer l\'audio'
          )}
        </button>

        {/* AFFICHAGE DES ERREURS */}
        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {/* LECTEUR AUDIO + TÉLÉCHARGEMENT */}
        {audioUrl && (
          <div className="audio-section">
            <h3>✅ Audio généré avec succès !</h3>
            
            <audio
              controls
              src={audioUrl}
              className="audio-player"
            >
              Votre navigateur ne supporte pas le lecteur audio.
            </audio>

            <button
              className="download-btn"
              onClick={handleDownload}
            >
              ⬇️ Télécharger l'audio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;