import { motion } from 'framer-motion';
import { Mic, BookOpen, Video, Briefcase, Code, GraduationCap, ArrowRight } from 'lucide-react';

/**
 * USE CASES SECTION
 *
 * Marketing principles:
 * 1. Help user project themselves using the product
 * 2. Segment by persona (podcaster, developer, student...)
 * 3. Specific examples > generic descriptions
 * 4. CTA for each use case
 */

const useCases = [
  {
    icon: Mic,
    title: 'Podcasters',
    description: 'Crée tes intros/outros en secondes',
    example: 'Génère 10 variations d\'intro et choisis la meilleure',
    link: '#demo',
    linkText: 'Voir un exemple podcast',
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-600',
  },
  {
    icon: BookOpen,
    title: 'Créateurs de contenu éducatif',
    description: 'Transforme tes articles en audio',
    example: 'Tes articles de blog deviennent des audiobooks',
    link: '#demo',
    linkText: 'Tutoriel audiobook',
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-600',
  },
  {
    icon: Video,
    title: 'Vidéastes YouTube',
    description: 'Voiceovers pro sans micro',
    example: 'Enregistre tes tutos sans te soucier du bruit ambiant',
    link: '#demo',
    linkText: 'Démo voiceover',
    color: 'from-red-500 to-orange-500',
    iconColor: 'text-red-600',
  },
  {
    icon: Briefcase,
    title: 'Marketeurs',
    description: 'Scripts publicitaires multilingues',
    example: 'Une pub FR, EN, ES en 5 minutes',
    link: '#demo',
    linkText: 'Exemples pubs',
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-600',
  },
  {
    icon: Code,
    title: 'Développeurs',
    description: 'Notifications vocales dans tes apps',
    example: 'Intègre des alertes vocales personnalisées',
    link: '#demo',
    linkText: 'Docs API',
    color: 'from-gray-600 to-gray-800',
    iconColor: 'text-gray-700',
  },
  {
    icon: GraduationCap,
    title: 'Étudiants',
    description: 'Révise tes cours en mode audio',
    example: 'Écoute tes notes pendant tes trajets',
    link: '#demo',
    linkText: 'Template étudiant',
    color: 'from-indigo-500 to-purple-500',
    iconColor: 'text-indigo-600',
  },
];

export default function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qui utilise VoiClub AI ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des créateurs aux développeurs, découvre comment chacun tire parti
            de la synthèse vocale gratuite
          </p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} p-3 mb-6`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg font-semibold text-primary mb-3">
                    {useCase.description}
                  </p>

                  {/* Example */}
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    💡 {useCase.example}
                  </p>

                  {/* CTA link */}
                  <a
                    href={useCase.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group-hover:text-primary-dark"
                  >
                    {useCase.linkText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6">
            Tu ne trouves pas ton cas d'usage ? Pas de souci !
          </p>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Essayer VoiClub gratuitement
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
