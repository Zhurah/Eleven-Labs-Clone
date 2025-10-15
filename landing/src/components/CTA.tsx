import { motion } from 'framer-motion';
import { Mic, ArrowRight, Github, Zap } from 'lucide-react';

/**
 * FINAL CTA SECTION - Last conversion opportunity
 *
 * Marketing principles:
 * 1. Urgency without being pushy
 * 2. Remove all friction (no CC, no signup)
 * 3. Dual CTA (try now / explore code)
 * 4. Reinforce value proposition one last time
 */

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-2 bg-white rounded-full"
            style={{
              left: `${(i * 100) / 15}%`,
              height: '150px',
            }}
            animate={{
              scaleY: [1, 1.8, 1.3, 1.5, 1],
              opacity: [0.3, 0.7, 0.5, 0.6, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Prêt à créer ta première
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
              voix IA ?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed">
            Aucune carte bancaire. Aucune inscription.
            <br />
            Juste de la <strong>magie vocale</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white hover:bg-gray-50 text-primary font-bold text-xl py-6 px-12 rounded-xl shadow-2xl transition-all duration-200 flex items-center gap-3"
            >
              <Mic className="w-7 h-7 group-hover:scale-110 transition-transform" />
              Essayer gratuitement
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.a
              href="https://github.com/voiclub/voiclub-ai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-3 border-white/30 hover:border-white text-white font-semibold text-xl py-6 px-12 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-200 flex items-center gap-3"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Explorer le code
              <span className="text-sm bg-white/20 px-2 py-1 rounded-full">⭐ 2.3k</span>
            </motion.a>
          </div>

          {/* Micro-copy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="font-medium">Génération en &lt; 3 secondes</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">💯</span>
              <span className="font-medium">Gratuit pour toujours</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔓</span>
              <span className="font-medium">Open-source</span>
            </div>
          </motion.div>

          {/* Stats banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-12 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Utilisateurs actifs' },
                { value: '10k+', label: 'Voix générées' },
                { value: '2.3k', label: 'GitHub stars' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* A/B TEST VARIANT: Add urgency
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="bg-accent text-white px-6 py-3 rounded-full font-semibold shadow-xl">
          ⚡ Offre de lancement - Premiers 100 utilisateurs
        </div>
      </motion.div>
      */}
    </section>
  );
}
