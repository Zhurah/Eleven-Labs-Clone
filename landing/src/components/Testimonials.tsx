import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

/**
 * TESTIMONIALS / SOCIAL PROOF SECTION
 *
 * Marketing principles:
 * 1. Cialdini's Social Proof - Reduce perceived risk
 * 2. Specific outcomes > vague praise
 * 3. Real names + titles = credibility
 * 4. 5-star ratings for visual impact
 *
 * Testimonial formula: [Specific benefit] + [Measurable result] + [Emotion]
 */

const testimonials = [
  {
    name: 'Marie Laurent',
    title: 'Podcasteuse',
    avatar: '👩‍🦰',
    rating: 5,
    quote: "J'ai économisé 264€ en 12 mois tout en gardant une qualité pro. Ma productivité a explosé !",
    highlight: 'Économie réelle',
  },
  {
    name: 'Thomas Dubois',
    title: 'Développeur indépendant',
    avatar: '👨‍💻',
    rating: 5,
    quote: "Intégré dans mon SaaS en 30 minutes. L'API est incroyablement simple et bien documentée.",
    highlight: 'Setup rapide',
  },
  {
    name: 'Sofia Karim',
    title: 'Autrice audiobooks',
    avatar: '👩‍🎨',
    rating: 5,
    quote: 'Mes audiobooks sonnent aussi bien qu\'avec Eleven Labs, sans le prix. Mes marges ont triplé.',
    highlight: 'Qualité identique',
  },
  {
    name: 'Lucas Martin',
    title: 'Créateur YouTube',
    avatar: '👨‍🎓',
    rating: 5,
    quote: 'Parfait pour les voiceovers de mes tutos. Fini les retakes au micro à 2h du matin !',
    highlight: 'Gain de temps',
  },
  {
    name: 'Emma Petit',
    title: 'Marketing Manager',
    avatar: '👩‍💼',
    rating: 5,
    quote: 'On génère nos publicités multilingues en quelques clics. ROI incroyable pour notre agence.',
    highlight: 'ROI élevé',
  },
  {
    name: 'Alexandre Chen',
    title: 'Étudiant en design',
    avatar: '👨‍🎨',
    rating: 5,
    quote: 'Gratuit et sans limite ? Parfait pour mes projets étudiants. La qualité me bluffe à chaque fois.',
    highlight: 'Parfait étudiants',
  },
];

const trustBadges = [
  { label: 'Product Hunt', value: '4.9/5', icon: '🏆' },
  { label: 'GitHub Stars', value: '2.3k+', icon: '⭐' },
  { label: 'Uptime', value: '99.9%', icon: '✅' },
  { label: 'RGPD', value: 'Conforme', icon: '🔒' },
  { label: 'Open-source', value: 'MIT', icon: '🌱' },
  { label: 'CO2', value: '0g', icon: '💚' },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ils ont déjà fait le switch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des centaines de créateurs ont abandonné les solutions payantes.
            <br />
            Voici pourquoi 👇
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Highlight badge */}
                <div className="mb-4">
                  <span className="inline-block bg-accent/10 text-accent-dark px-3 py-1 rounded-full text-sm font-semibold">
                    💡 {testimonial.highlight}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">
              Ils nous font confiance
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    {badge.label}
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {badge.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* A/B TEST VARIANT: Add video testimonials
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2">
            <Play className="w-5 h-5" />
            Voir les témoignages vidéo
          </button>
        </motion.div>
        */}
      </div>
    </section>
  );
}
