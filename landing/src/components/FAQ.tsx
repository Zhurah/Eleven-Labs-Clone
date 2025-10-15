import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

/**
 * FAQ SECTION - Objection handling
 *
 * Marketing principles:
 * 1. Address top 8 objections before user asks
 * 2. Build trust through transparency
 * 3. Accordion format = scan-friendly
 * 4. Last chance to convert before CTA
 */

const faqs = [
  {
    question: "C'est vraiment gratuit ? Où est le piège ?",
    answer: "Oui, 100% gratuit pour 50 générations/mois. Open-source et hébergé sur nos serveurs. Les plans premium (bientôt disponibles) financent l'infrastructure pour que la version gratuite reste accessible à tous, pour toujours. Aucun piège, aucune carte bancaire requise.",
  },
  {
    question: "Quelle est la différence avec Eleven Labs ?",
    answer: "Qualité équivalente grâce aux modèles Kokoro et Coqui, mais gratuit et open-source. Parfait pour les créateurs avec budget limité. Eleven Labs a plus de voix disponibles et quelques fonctionnalités avancées (clonage de voix), mais VoiClub couvre 95% des besoins à 0€.",
  },
  {
    question: "Dois-je créer un compte ?",
    answer: "Non ! Teste immédiatement sans inscription. Un compte (optionnel) te permet de sauvegarder tes générations et d'accéder à l'historique, mais ce n'est pas obligatoire pour utiliser le service. Nous respectons ta vie privée.",
  },
  {
    question: "Puis-je utiliser les voix commercialement ?",
    answer: "Oui, licence permissive. Les voix générées t'appartiennent et tu peux les utiliser dans tes projets commerciaux (podcasts, vidéos YouTube, publicités, audiobooks, etc.). Aucune attribution requise.",
  },
  {
    question: "Combien de langues sont supportées ?",
    answer: "Actuellement : français, anglais, espagnol, allemand, italien, portugais, et plus. 10+ langues avec plusieurs accents disponibles. Nous ajoutons régulièrement de nouvelles langues selon la demande. Chinois, japonais et arabe prévus en 2025.",
  },
  {
    question: "L'API est-elle documentée ?",
    answer: "Oui ! Documentation complète avec exemples Python, JavaScript, cURL, et plus. Intégration simple en quelques lignes de code. Rate limits généreux sur le plan gratuit (50 req/jour). Support WebSocket pour streaming en temps réel.",
  },
  {
    question: "Puis-je cloner ma propre voix ?",
    answer: "Bientôt disponible avec le plan Pro (Q1 2025). Cette fonctionnalité nécessite 10-15 minutes d'échantillons audio de qualité. Le clonage de voix sera soumis à vérification pour éviter les abus. Inscris-toi à la newsletter pour être notifié du lancement.",
  },
  {
    question: "Comment signaler un bug ou demander une fonctionnalité ?",
    answer: "GitHub Issues pour les bugs et feature requests, ou email à support@voiclubai.cloud. Délai de réponse : 24h en moyenne. Pour le plan Pro/Premium : support prioritaire avec délai de réponse < 4h. La roadmap publique est visible sur GitHub.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Questions fréquentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tu as des questions ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            On a les réponses. Et si tu ne trouves pas la tienne,
            contacte-nous directement.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Tu ne trouves pas la réponse à ta question ?
          </p>
          <a
            href="mailto:support@voiclubai.cloud"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Contacte notre équipe support →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
