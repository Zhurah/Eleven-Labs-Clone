import { motion } from 'framer-motion';
import { DollarSign, Lock, Clock, TrendingDown } from 'lucide-react';

/**
 * PROBLEM/AGITATION SECTION
 *
 * Marketing principles:
 * 1. PAS Framework (Problem-Agitate-Solution)
 * 2. Pain point identification - Resonate with user frustrations
 * 3. Emotional triggers - Financial pain, limitations, time waste
 * 4. Statistic shock - 78% abandonment rate
 *
 * Psychology:
 * - Creates cognitive dissonance with current solution
 * - Positions our product as the logical alternative
 * - Uses loss aversion (money wasted, opportunities missed)
 */

const problems = [
  {
    icon: DollarSign,
    title: 'Tarifs prohibitifs',
    description: 'Eleven Labs coûte 22€/mois pour les créateurs débutants',
    pain: '264€/an pour une fonctionnalité de base',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Lock,
    title: 'APIs fermées et limitées',
    description: 'Systèmes propriétaires sans accès au code source',
    pain: 'Impossible de personnaliser ou auto-héberger',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Clock,
    title: 'Quotas épuisés rapidement',
    description: 'Limites de caractères atteintes en milieu de mois',
    pain: 'Projets bloqués au pire moment',
    color: 'from-yellow-500 to-red-500',
  },
];

export default function Problem() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Headline with pain point */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marre de payer{' '}
            <span className="relative">
              <span className="relative z-10 text-red-600">22€/mois</span>
              <motion.span
                className="absolute inset-0 bg-red-200 -rotate-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.3 }}
              />
            </span>{' '}
            pour Eleven Labs ?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu n'es pas seul. Des milliers de créateurs abandonnent leurs projets audio
            à cause de ces frustrations...
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Pain point callout */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="text-sm font-semibold text-red-800">
                      😤 {problem.pain}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Shocking statistic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main stat card */}
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-12 text-center text-white shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <TrendingDown className="w-10 h-10" />
              </div>

              {/* Stat */}
              <div className="text-7xl md:text-8xl font-bold mb-4">78%</div>

              {/* Description */}
              <p className="text-2xl md:text-3xl font-semibold mb-2">
                des créateurs abandonnent
              </p>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                leur projet audio à cause des <strong>coûts prohibitifs</strong> des solutions TTS premium
              </p>

              {/* Source */}
              <p className="text-sm text-white/70 mt-6">
                Source: Étude Creator Economy 2024
              </p>
            </div>
          </div>

          {/* A/B TEST VARIANT: Add user quotes
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-red-500">
              <p className="text-sm text-gray-700 italic">
                "J'ai dû arrêter mon podcast après 3 mois... Mon budget ne suivait pas."
              </p>
              <p className="text-xs text-gray-500 mt-2">- Thomas, ex-podcasteur</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-orange-500">
              <p className="text-sm text-gray-700 italic">
                "22€/mois c'est plus cher que mon hébergement web !"
              </p>
              <p className="text-xs text-gray-500 mt-2">- Marie, créatrice YouTube</p>
            </div>
          </div>
          */}
        </motion.div>

        {/* Transition to solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            Et si tu pouvais avoir la <span className="text-gradient">même qualité</span>...
          </p>
          <p className="text-3xl font-bold text-gray-900">
            Pour <span className="text-accent text-5xl">0€</span> ?
          </p>

          {/* Arrow pointing down */}
          <motion.div
            className="inline-block mt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
