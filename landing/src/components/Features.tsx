import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  DollarSign,
  Globe,
  Unlock,
  Code,
  Check,
  ArrowRight,
} from 'lucide-react';

/**
 * FEATURES SECTION - Benefits over features
 *
 * Marketing principles:
 * 1. Feature → Benefit translation (not just what, but why it matters)
 * 2. Proof points for each claim
 * 3. Visual hierarchy with icons and cards
 * 4. Staggered animations for engagement
 *
 * Copywriting formula: [Feature] → [Benefit] → [Proof]
 * Example: "Voix réalistes" → "Vos auditeurs ne verront pas la différence" → "Kokoro v0.19"
 */

const features = [
  {
    icon: Sparkles,
    iconColor: 'text-purple-600',
    bgColor: 'from-purple-500 to-pink-500',
    feature: 'Voix ultra-réalistes',
    benefit: 'Tes auditeurs ne verront pas la différence',
    proof: 'Propulsé par Kokoro v0.19',
    stats: '98% de satisfaction',
    highlight: true,
  },
  {
    icon: Zap,
    iconColor: 'text-yellow-600',
    bgColor: 'from-yellow-500 to-orange-500',
    feature: 'Génération en 2 secondes',
    benefit: 'Crée 10 voiceovers pendant ta pause café',
    proof: "Jusqu'à 5000 caractères par requête",
    stats: '10x plus rapide',
  },
  {
    icon: DollarSign,
    iconColor: 'text-green-600',
    bgColor: 'from-green-500 to-emerald-500',
    feature: '100% gratuit et open-source',
    benefit: 'Zéro frais cachés, code accessible sur GitHub',
    proof: '50 générations/mois gratuites pour toujours',
    stats: '264€ économisés/an',
    highlight: true,
  },
  {
    icon: Globe,
    iconColor: 'text-blue-600',
    bgColor: 'from-blue-500 to-cyan-500',
    feature: 'Multilingue',
    benefit: 'Touche une audience internationale',
    proof: 'Support de 10+ langues',
    stats: 'FR, EN, ES, DE...',
  },
  {
    icon: Unlock,
    iconColor: 'text-indigo-600',
    bgColor: 'from-indigo-500 to-purple-500',
    feature: 'Sans inscription',
    benefit: 'Teste en 10 secondes, pas d\'email requis',
    proof: 'Aucune donnée collectée',
    stats: 'Privacy-first',
  },
  {
    icon: Code,
    iconColor: 'text-gray-700',
    bgColor: 'from-gray-600 to-gray-800',
    feature: 'API developer-friendly',
    benefit: 'Intègre dans tes apps en 5 lignes de code',
    proof: 'Documentation complète + exemples',
    stats: 'REST + WebSocket',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Subheading */}
          <p className="text-primary font-semibold text-lg mb-3 tracking-wide uppercase">
            La solution
          </p>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tout ce dont tu as besoin,{' '}
            <span className="text-gradient">rien de superflu</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des fonctionnalités professionnelles pensées pour les créateurs,
            sans les tarifs prohibitifs des solutions premium
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Highlight badge for key features */}
                {feature.highlight && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      ⭐ Top
                    </div>
                  </div>
                )}

                {/* Feature card */}
                <div className={`
                  relative bg-white rounded-2xl p-8 h-full
                  border-2 transition-all duration-300
                  ${feature.highlight ? 'border-primary shadow-xl' : 'border-gray-100 shadow-lg hover:shadow-xl'}
                  hover:border-primary hover:-translate-y-2
                `}>
                  {/* Icon with gradient */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.bgColor} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Feature name (technical) */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.feature}
                  </h3>

                  {/* Benefit (emotional/practical) */}
                  <p className="text-gray-700 text-lg font-medium mb-4 leading-relaxed">
                    {feature.benefit}
                  </p>

                  {/* Proof point */}
                  <div className="flex items-start gap-2 mb-4">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">
                      {feature.proof}
                    </p>
                  </div>

                  {/* Stats badge */}
                  <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20">
                    <p className="text-sm font-semibold text-primary">
                      {feature.stats}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left: Text */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    La même qualité qu'Eleven Labs
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    VoiClub utilise les mêmes technologies de pointe
                    (modèles transformers neuronaux), mais avec un{' '}
                    <strong className="text-primary">modèle gratuit et transparent</strong>.
                  </p>

                  <div className="space-y-3">
                    {[
                      'Qualité audio professionnelle 48kHz',
                      'Intonation et émotions naturelles',
                      'Aucune voix robotique',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Visual comparison */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center">
                    <div className="mb-4">
                      <div className="text-5xl font-bold text-gray-900">0€</div>
                      <div className="text-sm text-gray-600 mt-1">VoiClub AI</div>
                    </div>
                    <div className="text-gray-400 text-2xl mb-4">vs</div>
                    <div>
                      <div className="text-3xl font-bold text-red-600 line-through">22€</div>
                      <div className="text-sm text-gray-600 mt-1">Eleven Labs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* A/B TEST VARIANT: Add feature comparison table
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3"></th>
                <th className="text-center py-3 text-primary font-bold">VoiClub</th>
                <th className="text-center py-3 text-gray-500">Autres</th>
              </tr>
            </thead>
            <tbody>
              {['Qualité', 'Prix', 'Open-source', 'Inscription'].map(row => (
                <tr key={row} className="border-b">
                  <td className="py-3">{row}</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">{row === 'Qualité' ? '✅' : '❌'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        */}
      </div>
    </section>
  );
}
