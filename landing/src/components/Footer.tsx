import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Youtube, Heart } from 'lucide-react';

/**
 * FOOTER - Navigation & legal
 *
 * Contains all secondary navigation and legal links
 */

const footerLinks = {
  product: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Comparaisons', href: '#comparison' },
    { label: 'Roadmap', href: 'https://github.com/voiclub/roadmap' },
  ],
  resources: [
    { label: 'Documentation API', href: 'https://docs.voiclubai.cloud' },
    { label: 'Tutoriels', href: '/tutorials' },
    { label: 'Blog', href: '/blog' },
    { label: 'GitHub', href: 'https://github.com/voiclub' },
  ],
  legal: [
    { label: 'CGU', href: '/terms' },
    { label: 'Politique de confidentialité', href: '/privacy' },
    { label: 'Mentions légales', href: '/legal' },
    { label: 'Contact', href: 'mailto:hello@voiclubai.cloud' },
  ],
  social: [
    { icon: Twitter, href: 'https://twitter.com/voiclub', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/voiclub', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@voiclub', label: 'YouTube' },
    { icon: Github, href: 'https://github.com/voiclub', label: 'GitHub' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                VoiClub AI
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                La synthèse vocale par IA,
                <br />
                gratuite et open-source.
              </p>

              {/* Social links */}
              <div className="flex gap-4">
                {footerLinks.social.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Product column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-bold mb-4">Produit</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-bold mb-4">Ressources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Legal column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-white font-bold mb-4">Légal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-8 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-white mb-3">
              Reste informé des nouveautés
            </h4>
            <p className="text-gray-400 mb-6">
              Nouvelles voix, fonctionnalités, tutoriels... Une newsletter par mois max.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="ton@email.com"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 VoiClub AI. Tous droits réservés.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-gray-500">by</span>
              <a
                href="https://github.com/aurelienanand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors"
              >
                Aurelien Anand
              </a>
              <span className="text-gray-500 mx-2">•</span>
              <span className="text-gray-500">Hébergé en</span>
              <span className="text-white">🇫🇷</span>
              <span className="text-gray-500 mx-2">•</span>
              <a
                href="https://github.com/voiclub/voiclub-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors inline-flex items-center gap-1"
              >
                Open-source
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
