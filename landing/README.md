# VoiClub AI - Landing Page

Landing page optimisée pour la conversion, construite avec React + TypeScript + Tailwind CSS.

## 🎯 Objectifs de conversion

1. **Essai gratuit immédiat** - Try before buy
2. **Inscription newsletter** - Lead generation
3. **Partage social** - Viralité
4. **Passage plan payant** - Monétisation future

## 🚀 Quick Start

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

L'application sera disponible sur `http://localhost:5173`

## 📁 Structure du projet

```
landing/
├── src/
│   ├── components/          # Composants React
│   │   ├── Hero.tsx         # Section hero (above the fold)
│   │   ├── Problem.tsx      # Identification du problème
│   │   ├── Features.tsx     # Présentation des fonctionnalités
│   │   ├── Demo.tsx         # Démo interactive
│   │   ├── Testimonials.tsx # Témoignages clients
│   │   ├── Comparison.tsx   # Tableau comparatif
│   │   ├── UseCases.tsx     # Cas d'usage
│   │   ├── Pricing.tsx      # Grille tarifaire
│   │   ├── FAQ.tsx          # Questions fréquentes
│   │   ├── CTA.tsx          # Call-to-action final
│   │   └── Footer.tsx       # Pied de page
│   ├── App.tsx              # Composant principal
│   ├── main.tsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── public/                  # Assets statiques
├── package.json
├── tailwind.config.js       # Configuration Tailwind
├── tsconfig.json            # Configuration TypeScript
└── vite.config.ts           # Configuration Vite
```

## 🎨 Principes de design appliqués

### 1. Hiérarchie de l'information (F-Pattern)
- Hero avec proposition de valeur claire en 5 secondes
- CTA principal "above the fold"
- Progression logique : Problème → Solution → Preuve → Action

### 2. Psychologie de la persuasion (Cialdini)
- **Réciprocité** : Offre gratuite immédiate (50 générations/mois)
- **Preuve sociale** : Compteur d'utilisateurs, témoignages, badges
- **Autorité** : Comparaison avec Eleven Labs, logos
- **Rareté** : Badges "Early Adopter" (optionnel)
- **Cohérence** : Micro-engagements progressifs
- **Sympathie** : Ton humain, histoire authentique

### 3. Copywriting AIDA
- **Attention** : Headline percutant + visuel fort
- **Intérêt** : Statistiques, problèmes identifiables
- **Désir** : Bénéfices émotionnels + démonstration
- **Action** : CTAs clairs et répétés

## 🎯 Optimisations marketing

### Above the fold
- Value proposition en 3 secondes
- CTA principal visible sans scroll
- Trust signals (gratuit, sans inscription, open-source)

### Social proof
- Compteur en temps réel
- 6 témoignages détaillés
- Trust badges (GitHub stars, uptime, RGPD)

### Friction minimale
- Essai sans inscription
- Demo interactive immédiate
- Pas de popup intrusif

## 🎨 Personnalisation

### Modifier les couleurs

Édite `tailwind.config.js` :

```javascript
colors: {
  primary: {
    DEFAULT: '#6366F1', // Indigo
    dark: '#4F46E5',
    light: '#818CF8',
  },
  // ...
}
```

### Modifier le copy

Chaque composant contient des commentaires indiquant :
- Le principe marketing appliqué
- Les variantes A/B test possibles
- Les formules de copywriting utilisées

Exemple dans `Hero.tsx` :

```tsx
// A/B TEST VARIANT: Add urgency
// <div className="...">
//   ⚡ Offre de lancement - 100 premiers utilisateurs
// </div>
```

### Ajouter des animations

Utilise Framer Motion déjà configuré :

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Contenu */}
</motion.div>
```

## 📊 Analytics

### Google Analytics 4

Ajoute dans `index.html` avant `</head>` :

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (recommandé - privacy-first)

```html
<script defer data-domain="voiclubai.cloud" src="https://plausible.io/js/script.js"></script>
```

### Events trackés automatiquement

- `page_view` - Vue de page
- `scroll_depth` - Profondeur de scroll (25%, 50%, 75%, 100%)
- `cta_clicked` - Clic sur CTA (à implémenter)
- `demo_generated` - Génération de démo (à implémenter)

## 🚀 Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify

```bash
# Build
npm run build

# Le dossier dist/ contient les fichiers à déployer
```

### Configuration DNS

Pointe ton domaine vers :
- **Vercel** : Ajoute un CNAME vers `cname.vercel-dns.com`
- **Netlify** : Ajoute un CNAME vers `[ton-site].netlify.app`

## 🎯 Checklist de déploiement

- [ ] Tests cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Tests mobile (iPhone SE 375px, iPad, Android)
- [ ] Lighthouse score > 95 (Performance, SEO, Accessibility)
- [ ] SEO audit (meta tags, structured data)
- [ ] Analytics configuré et testé
- [ ] Formulaires connectés (newsletter, contact)
- [ ] Open Graph images générées (1200x630px)
- [ ] Favicon ajouté (32x32, 192x192, 512x512)
- [ ] Sitemap.xml généré
- [ ] Robots.txt configuré
- [ ] SSL activé (HTTPS)

## 🎨 Assets à créer

### Images nécessaires

1. **og-image.jpg** (1200x630px)
   - Screenshot du hero ou design custom
   - Texte lisible : "VoiClub AI - Synthèse vocale gratuite"

2. **Favicon** (utilise https://realfavicongenerator.net)
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png (180x180)

3. **Illustrations** (optionnel)
   - Source gratuite : [Undraw](https://undraw.co), [Storyset](https://storyset.com)
   - À utiliser dans Demo, Features, Use Cases

### Génération d'avatars

Pour les témoignages, utilise :
- [Boring Avatars](https://boringavatars.com) (généré par code)
- [UI Avatars](https://ui-avatars.com) (API)
- Ou utilise des emojis (déjà fait !)

## 🧪 A/B Testing

### Variantes à tester

Chaque composant contient des commentaires `A/B TEST VARIANT` avec des alternatives :

**Hero :**
- Headline avec urgence vs sans urgence
- CTA "Essayer maintenant" vs "Créer ma première voix"
- Couleur CTA : Indigo vs Vert

**Pricing :**
- 3 plans vs 2 plans
- Prix visible vs "Coming soon"
- Badge "Most popular" sur Free vs Pro

**CTA :**
- Avec urgence ("100 premiers") vs sans
- Background gradient vs solid

### Outils recommandés

- **Google Optimize** (gratuit)
- **VWO** (payant)
- **Optimizely** (payant)
- **Split.io** (feature flags)

## 📈 KPIs à suivre

### Conversions
- Taux de conversion global (visiteurs → essai)
- Taux de scroll (% qui atteint le footer)
- Taux de clic CTA (par section)
- Taux d'inscription newsletter

### Engagement
- Temps moyen sur page
- Bounce rate
- Pages vues par session
- Démonstrations lancées

### Sources
- Trafic par source (Google, Twitter, Product Hunt, etc.)
- Taux de conversion par source
- Coût d'acquisition (si ads payantes)

## 🐛 Debugging

### La page ne charge pas

```bash
# Vérifier les dépendances
npm install

# Nettoyer le cache
rm -rf node_modules .vite
npm install
npm run dev
```

### Erreurs TypeScript

```bash
# Vérifier les types
npm run build
```

### Animations ne fonctionnent pas

- Vérifie que Framer Motion est installé
- Vérifie la configuration Tailwind pour les animations

## 🤝 Contribution

1. Fork le projet
2. Crée une branche (`git checkout -b feature/AmazingFeature`)
3. Commit tes changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvre une Pull Request

## 📝 License

MIT License - Libre d'utilisation commerciale

## 🙏 Crédits

- **Design system** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Fonts** : Inter (Google Fonts)
- **Inspiration** : Stripe, Linear, Vercel landing pages

## 📞 Support

- **Email** : hello@voiclubai.cloud
- **GitHub Issues** : [voiclub/landing](https://github.com/voiclub/landing/issues)
- **Twitter** : [@voiclub](https://twitter.com/voiclub)

---

Made with ❤️ by Aurelien Anand
