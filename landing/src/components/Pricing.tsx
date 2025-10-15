import { motion } from 'framer-motion';
import { Check, Zap, Star, Mail } from 'lucide-react';

/**
 * PRICING SECTION
 *
 * Marketing principles:
 * 1. Anchor pricing - Free plan anchors value
 * 2. Social proof - "Most popular" badge
 * 3. Feature comparison - Clear tier differentiation
 * 4. Loss aversion - "Coming soon" creates anticipation
 */

const plans = [
  {
    name: 'Gratuit',
    price: '0',
    period: 'pour toujours',
    description: 'Parfait pour découvrir et tester',
    features: [
      '50 générations/mois',
      'Voix Kokoro TTS',
      'Accès API complet',
      'Sans inscription',
      'Support communautaire',
    ],
    notIncluded: [
      'Voix Coqui premium',
      'Support prioritaire',
      'Sans watermark',
    ],
    cta: 'Essayer maintenant',
    ctaVariant: 'secondary',
    popular: false,
  },
  {
    name: 'Pro',
    price: '9',
    period: '/mois',
    description: 'Pour les créateurs sérieux',
    badge: 'Le plus populaire',
    features: [
      'Générations illimitées',
      'Toutes les voix (Kokoro + Coqui)',
      'Sans watermark audio',
      'API avec rate limit élevé',
      'Support prioritaire par email',
      'Accès anticipé aux nouvelles voix',
    ],
    notIncluded: [],
    cta: 'Bientôt disponible',
    ctaVariant: 'primary',
    popular: true,
    comingSoon: true,
  },
  {
    name: 'Premium',
    price: '19',
    period: '/mois',
    description: 'Pour les équipes et agences',
    features: [
      'Tout du plan Pro',
      'Clonage de voix personnalisées',
      'File d\'attente prioritaire',
      'Support dédié 24/7',
      'SLA 99.95%',
      'Intégration sur-mesure',
    ],
    notIncluded: [],
    cta: 'Nous contacter',
    ctaVariant: 'tertiary',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Un plan pour chaque créateur
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Commence gratuitement, passe au Pro quand tu es prêt.
            <br />
            <strong className="text-accent">Sans engagement, annule quand tu veux.</strong>
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-accent to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`
                relative bg-white rounded-2xl p-8 h-full flex flex-col
                transition-all duration-300
                ${plan.popular
                  ? 'border-4 border-primary shadow-2xl scale-105'
                  : 'border-2 border-gray-200 shadow-lg hover:shadow-xl'
                }
              `}>
                {/* Plan name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}€
                    </span>
                    <span className="text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA button */}
                <button
                  disabled={plan.comingSoon}
                  className={`
                    w-full font-bold py-4 px-6 rounded-lg mb-8
                    transition-all duration-200 flex items-center justify-center gap-2
                    ${plan.ctaVariant === 'primary'
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      : plan.ctaVariant === 'secondary'
                      ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }
                    ${plan.comingSoon ? 'opacity-75 cursor-not-allowed' : ''}
                  `}
                >
                  {plan.comingSoon && <Zap className="w-5 h-5" />}
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-3 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}

                  {/* Not included features (for free plan) */}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-40">
                      <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-gray-600">—</span>
                      </div>
                      <span className="text-gray-500 line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Coming soon note */}
                {plan.comingSoon && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                      💌 Disponible Q1 2025
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-3">
                  Besoin d'une solution entreprise ?
                </h3>
                <p className="text-lg text-gray-300">
                  Auto-hébergement, SLA personnalisé, intégration sur-mesure.
                  <br />
                  Contacte notre équipe pour un devis.
                </p>
              </div>
              <button className="flex-shrink-0 bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Nous contacter
              </button>
            </div>
          </div>
        </motion.div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-green-50 px-6 py-3 rounded-full border-2 border-green-200">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <span className="text-green-900 font-semibold">
              Garantie satisfait ou remboursé 30 jours (plans payants)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
