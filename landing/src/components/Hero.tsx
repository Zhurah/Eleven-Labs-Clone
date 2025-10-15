import { motion } from 'framer-motion';
import { Mic, Play, ArrowRight, Check, ChevronDown, Sparkles } from 'lucide-react';
import { useState } from 'react';

/**
 * HERO SECTION - Above the fold
 *
 * Marketing principles applied:
 * 1. AIDA framework - Attention with bold headline + visual
 * 2. F-Pattern layout - Key info on left, demo on right
 * 3. Social proof above headline (trust badge with live counter)
 * 4. Dual CTA strategy - Primary (try) + Secondary (watch demo)
 * 5. Clear value proposition in 3 seconds: "Free AI voice synthesis"
 * 6. Trust signals below CTAs (3 key benefits)
 *
 * Conversion triggers:
 * - "500+ créateurs" = Social proof (Cialdini)
 * - "Sans inscription" = Friction removal
 * - Green pulse dot = Urgency/activity
 * - Gradient text = Visual hierarchy
 */

// Wave animation component for background
const WaveAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-gradient-to-t from-primary/40 to-transparent rounded-full mx-1"
            style={{ height: '200px' }}
            animate={{
              scaleY: [1, 1.5, 1.2, 1.8, 1],
              opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Mini demo widget for hero section
const HeroDemoWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
    >
      {/* Floating badge */}
      <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
        <Sparkles className="w-4 h-4" />
        Essai gratuit
      </div>

      <div className="space-y-6">
        {/* Sample text */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Votre texte
          </label>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-gray-700 text-sm leading-relaxed">
              Bonjour, je suis une voix générée par intelligence artificielle.
              Ma qualité est comparable aux solutions professionnelles payantes.
            </p>
          </div>
        </div>

        {/* Voice selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Voix
          </label>
          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
            <option>🇫🇷 Sophie - Féminine (FR)</option>
            <option>🇫🇷 Nicolas - Masculine (FR)</option>
            <option>🇬🇧 Emma - Féminine (EN)</option>
            <option>🇬🇧 James - Masculine (EN)</option>
          </select>
        </div>

        {/* Generate button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Mic className="w-5 h-5" />
          Générer la voix
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Audio player (demo) */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/20">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
              <Play className="w-5 h-5 ml-0.5" />
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
          </div>
        </div>

        {/* Stats counter */}
        <div className="text-center pt-2 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            🔥 <span className="font-bold text-primary">247</span> voix générées aujourd'hui
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Background animation */}
      <WaveAnimation />

      {/* Gradient orbs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust badge - Social proof above headline */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-gray-100"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                <span className="font-bold text-primary">500+</span> créateurs nous font confiance
              </span>
            </motion.div>

            {/* Main headline - Clear value proposition */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              Transforme du texte en{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                voix naturelle
              </span>{' '}
              en quelques secondes
            </motion.h1>

            {/* Subheadline - Develops the promise */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              L'alternative gratuite et open-source à Eleven Labs.
              <br />
              <strong className="text-gray-900">Essaie immédiatement, sans inscription.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              {/* Primary CTA - Main action */}
              <button className="group bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2">
                <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Essayer gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA - Lower commitment */}
              <button
                onClick={scrollToDemo}
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Voir une démo
              </button>
            </motion.div>

            {/* Trust bar - 3 key benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200"
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-gray-700">100% gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-gray-700">Open-source</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-gray-700">Sans inscription</span>
              </div>
            </motion.div>

            {/* A/B TEST VARIANT: Add urgency
            <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent-dark px-4 py-2 rounded-lg border border-accent/20">
              <span className="text-sm font-semibold">
                ⚡ Offre de lancement - 100 premiers utilisateurs
              </span>
            </div>
            */}
          </motion.div>

          {/* RIGHT COLUMN: Demo widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:pl-8"
          >
            <HeroDemoWidget />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToDemo}
      >
        <ChevronDown className="w-8 h-8 text-gray-400 hover:text-primary transition-colors" />
      </motion.div>
    </section>
  );
}
