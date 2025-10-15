import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mic, Play, Pause, Download, Volume2, Loader } from 'lucide-react';

/**
 * DEMO SECTION - Interactive proof
 *
 * Marketing principles:
 * 1. "Show, don't tell" - Let users experience the product
 * 2. Friction removal - Pre-loaded examples for instant demo
 * 3. Social proof - Live counter of generations
 * 4. Comparison - Before/after to show quality difference
 *
 * Conversion triggers:
 * - Instant gratification (try now)
 * - FOMO (live counter)
 * - Quality proof (audio comparison)
 */

const sampleTexts = [
  {
    id: 'podcast',
    label: 'Intro Podcast',
    text: 'Bienvenue dans cet épisode ! Aujourd\'hui, nous allons explorer les dernières avancées en intelligence artificielle et leur impact sur notre quotidien.',
    voice: 'Sophie',
  },
  {
    id: 'narration',
    label: 'Narration',
    text: 'Il était une fois, dans un royaume lointain, un jeune inventeur qui rêvait de créer des machines capables de parler comme des humains.',
    voice: 'Nicolas',
  },
  {
    id: 'ad',
    label: 'Publicité',
    text: 'Découvrez la nouvelle façon de créer du contenu audio. Rapide, naturel, et accessible à tous. Essayez dès maintenant !',
    voice: 'Sophie',
  },
];

const voices = [
  { id: 'sophie', name: 'Sophie', gender: 'Féminine', lang: '🇫🇷 FR' },
  { id: 'nicolas', name: 'Nicolas', gender: 'Masculine', lang: '🇫🇷 FR' },
  { id: 'emma', name: 'Emma', gender: 'Féminine', lang: '🇬🇧 EN' },
  { id: 'james', name: 'James', gender: 'Masculine', lang: '🇬🇧 EN' },
];

export default function Demo() {
  const [text, setText] = useState(sampleTexts[0].text);
  const [selectedVoice, setSelectedVoice] = useState(voices[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [liveCounter, setLiveCounter] = useState(247);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
      setLiveCounter(prev => prev + 1);
    }, 2000);
  };

  const loadSample = (sample: typeof sampleTexts[0]) => {
    setText(sample.text);
    const voice = voices.find(v => v.name === sample.voice) || voices[0];
    setSelectedVoice(voice);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Essaie par toi-même
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Génère ta première voix IA en quelques secondes. Aucune inscription requise.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Demo interface */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              {/* Quick samples */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Exemples rapides
                </label>
                <div className="flex flex-wrap gap-2">
                  {sampleTexts.map((sample) => (
                    <button
                      key={sample.id}
                      onClick={() => loadSample(sample)}
                      className="px-4 py-2 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      {sample.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ton texte
                  <span className="text-gray-400 font-normal ml-2">
                    ({text.length}/5000 caractères)
                  </span>
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Entre ton texte ici..."
                  maxLength={5000}
                />
              </div>

              {/* Voice selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Choisis une voix
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {voices.map((voice) => (
                    <button
                      key={voice.id}
                      onClick={() => setSelectedVoice(voice)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedVoice.id === voice.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{voice.name}</div>
                      <div className="text-sm text-gray-600">
                        {voice.gender} • {voice.lang}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate button */}
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !text.trim()}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5" />
                    Générer la voix
                  </>
                )}
              </button>

              {/* Audio player (appears after generation) */}
              {hasGenerated && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6 ml-0.5" />
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: '0%' }}
                          animate={{ width: isPlaying ? '100%' : '0%' }}
                          transition={{ duration: 3 }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0:00</span>
                        <span>0:03</span>
                      </div>
                    </div>

                    <Volume2 className="w-5 h-5 text-gray-400" />
                  </div>

                  <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg border border-gray-200 transition-colors flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Télécharger MP3
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Right: Info & stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Live counter */}
              <div className="bg-gradient-to-br from-accent to-green-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-medium opacity-90">En temps réel</div>
                    <div className="text-2xl font-bold">Générations aujourd'hui</div>
                  </div>
                </div>
                <div className="text-6xl font-bold mb-2">{liveCounter}</div>
                <div className="text-sm opacity-90">
                  🔥 +12 dans les dernières 5 minutes
                </div>
              </div>

              {/* Quality comparison */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Avant / Après
                </h3>
                <p className="text-gray-600 mb-6">
                  Compare la différence entre un TTS classique et VoiClub AI
                </p>

                <div className="space-y-4">
                  {/* TTS classique */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        TTS Robotique
                      </span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                        Médiocre
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-gray-600 ml-0.5" />
                      </button>
                      <div className="flex-1 h-1 bg-gray-300 rounded" />
                    </div>
                  </div>

                  {/* VoiClub */}
                  <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary">
                        VoiClub AI
                      </span>
                      <span className="text-xs bg-accent text-white px-2 py-1 rounded">
                        Naturelle
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-white ml-0.5" />
                      </button>
                      <div className="flex-1 h-1 bg-gradient-to-r from-primary to-secondary rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Features highlight */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pourquoi c'est mieux ?
                </h3>
                <div className="space-y-3">
                  {[
                    'Intonation naturelle',
                    'Émotions perceptibles',
                    'Aucun effet robotique',
                    'Qualité audio 48kHz',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
