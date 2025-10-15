import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';

/**
 * COMPARISON TABLE SECTION
 *
 * Marketing principles:
 * 1. Competitive positioning - Direct comparison builds confidence
 * 2. Visual contrast - Green checks vs red X
 * 3. Highlight key differentiators
 * 4. Reinforce value proposition
 */

const comparisonData = [
  {
    feature: 'Prix mensuel',
    elevenlabs: '22€',
    voiclub: '✅ Gratuit',
    highlight: true,
  },
  {
    feature: 'Qualité vocale',
    elevenlabs: '⭐⭐⭐⭐⭐',
    voiclub: '⭐⭐⭐⭐⭐',
    highlight: false,
  },
  {
    feature: 'Générations/mois',
    elevenlabs: '30k caractères',
    voiclub: '✅ 50 générations',
    highlight: false,
  },
  {
    feature: 'API disponible',
    elevenlabs: '✅',
    voiclub: '✅',
    highlight: false,
  },
  {
    feature: 'Open-source',
    elevenlabs: '❌',
    voiclub: '✅ GitHub',
    highlight: true,
  },
  {
    feature: 'Inscription requise',
    elevenlabs: '✅ Oui',
    voiclub: '❌ Non',
    highlight: true,
  },
  {
    feature: 'Support français',
    elevenlabs: '✅',
    voiclub: '✅',
    highlight: false,
  },
  {
    feature: 'Délai de génération',
    elevenlabs: '~3s',
    voiclub: '~2s',
    highlight: false,
  },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            VoiClub vs Eleven Labs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Même qualité, même performance.
            <br />
            Mais <strong className="text-accent">0€ au lieu de 264€/an</strong>
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-1">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              {/* Table header */}
              <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b-2 border-gray-200">
                <div className="text-left">
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Fonctionnalité
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Eleven Labs
                  </span>
                </div>
                <div className="text-center relative">
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">
                    VoiClub AI
                  </span>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-5 h-5 text-accent fill-accent" />
                  </div>
                </div>
              </div>

              {/* Table rows */}
              <div className="divide-y divide-gray-100">
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`grid grid-cols-3 gap-4 p-6 transition-colors ${
                      row.highlight ? 'bg-accent/5' : 'hover:bg-gray-50'
                    }`}
                  >
                    {/* Feature name */}
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">
                        {row.feature}
                      </span>
                      {row.highlight && (
                        <span className="w-2 h-2 bg-accent rounded-full" />
                      )}
                    </div>

                    {/* Eleven Labs value */}
                    <div className="text-center text-gray-600 font-medium">
                      {row.elevenlabs}
                    </div>

                    {/* VoiClub value */}
                    <div className="text-center">
                      <span className={`font-bold ${
                        row.highlight ? 'text-primary' : 'text-gray-900'
                      }`}>
                        {row.voiclub}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center shadow-xl">
            <p className="text-2xl font-bold mb-4">
              💡 VoiClub utilise les mêmes technologies de pointe
            </p>
            <p className="text-lg opacity-90">
              Modèles transformers neuronaux identiques,
              mais avec un <strong>modèle gratuit et transparent</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
