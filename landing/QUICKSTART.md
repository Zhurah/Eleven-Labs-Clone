# ⚡ Quick Start - 5 minutes to launch

Guide ultra-rapide pour lancer ta landing page VoiClub AI.

## 🚀 Étape 1 : Installation (2 min)

```bash
# Clone ou navigue vers le dossier
cd landing

# Installe les dépendances
npm install

# Lance le serveur de dev
npm run dev
```

✅ Ouvre http://localhost:5173

Tu devrais voir la landing page complète avec toutes les sections !

---

## 🎨 Étape 2 : Personnalisation basique (3 min)

### Modifier les couleurs

Édite `tailwind.config.js` ligne 8-15 :

```javascript
colors: {
  primary: {
    DEFAULT: '#6366F1',  // Change cette couleur
    dark: '#4F46E5',
  },
  // ...
}
```

**Suggestions alternatives :**
- Bleu tech : `#3B82F6`
- Vert eco : `#10B981`
- Violet créatif : `#8B5CF6`
- Orange énergique : `#F97316`

### Modifier le texte principal

Édite `src/components/Hero.tsx` ligne 124-135 :

```tsx
<h1>
  Transforme du texte en{' '}
  <span>voix naturelle</span>  {/* ← Change ce texte */}
  en quelques secondes
</h1>
```

### Changer le domaine

Édite `index.html` ligne 28, 32, 36, 40 :

```html
<meta property="og:url" content="https://TON-DOMAINE.com" />
```

Et `src/components/Footer.tsx` ligne 120-125 pour les emails.

---

## ✅ Étape 3 : Vérification (30 sec)

### Check visuel
- [ ] Hero section s'affiche correctement
- [ ] CTAs sont cliquables
- [ ] Scroll smooth fonctionne
- [ ] Toutes les sections apparaissent

### Check responsive
```bash
# Ouvre Chrome DevTools
# Appuie sur Cmd/Ctrl + Shift + M
# Teste iPhone, iPad, Desktop
```

- [ ] Mobile : 375px (iPhone SE)
- [ ] Tablet : 768px (iPad)
- [ ] Desktop : 1920px

---

## 🎯 Prochaines étapes (optionnel)

### Connecter à ton API VoiClub

Édite `src/components/Demo.tsx` ligne 72-80 :

```tsx
const handleGenerate = async () => {
  setIsGenerating(true);

  try {
    const response = await fetch('https://api.voiclubai.cloud/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: text,
        voice: selectedVoice.id,
      }),
    });

    const data = await response.json();
    // Gérer la réponse...
  } catch (error) {
    console.error('Erreur:', error);
  } finally {
    setIsGenerating(false);
  }
};
```

### Ajouter Google Analytics

Édite `index.html` ligne 44 (avant `</head>`) :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Remplace `G-XXXXXXXXXX` par ton ID GA4.

---

## 📦 Build pour production

```bash
# Crée le build optimisé
npm run build

# Le dossier dist/ contient les fichiers
# Prêts à être déployés !
```

### Déployer sur Vercel

```bash
# Installe Vercel CLI
npm i -g vercel

# Déploie en 1 commande
vercel

# Ou connecte ton repo GitHub
# → Vercel détecte auto et déploie
```

**URL de démo** : `https://voiclub-landing.vercel.app`

---

## 🐛 Problèmes courants

### "npm install" échoue

```bash
# Nettoie et réinstalle
rm -rf node_modules package-lock.json
npm install
```

### Erreur "Cannot find module"

```bash
# Vérifie que tu es dans le bon dossier
pwd
# Doit afficher: .../landing

# Réinstalle
npm install
```

### Page blanche

```bash
# Vérifie la console du navigateur (F12)
# Regarde les erreurs TypeScript
npm run build
```

### Animations ne marchent pas

```bash
# Vérifie que framer-motion est installé
npm list framer-motion

# Sinon réinstalle
npm install framer-motion
```

---

## 📝 Checklist avant lancement

### Contenu
- [ ] Headline Hero modifié avec ton message
- [ ] Emails changés (Footer, FAQ)
- [ ] URLs changées (og:url, canonical)
- [ ] Stats/compteurs adaptés à ta réalité

### Technique
- [ ] Build réussi (`npm run build`)
- [ ] Pas d'erreurs TypeScript
- [ ] Tests sur Chrome, Firefox, Safari
- [ ] Tests mobile iPhone & Android

### SEO
- [ ] Title tag personnalisé (index.html:8)
- [ ] Meta description modifiée (index.html:9)
- [ ] OG image créée et uploadée (og-image.jpg)
- [ ] Favicon ajouté (favicon.ico)

### Analytics
- [ ] Google Analytics configuré
- [ ] Événements de tracking testés
- [ ] Scroll depth fonctionne

---

## 🎨 Assets manquants (à créer)

**Priorité 1 (critique) :**
1. **Favicon** - Utilise https://realfavicongenerator.net
2. **OG Image** (1200x630) - Utilise Canva
3. **Logo SVG** - Texte + icône simple

**Priorité 2 (important) :**
4. Samples audio démo (4 fichiers MP3)
5. Screenshots/GIF de l'interface

Voir `ASSETS.md` pour le guide complet.

---

## 💡 Tips rapides

### Changer les couleurs partout en 1 clic

```bash
# Cherche & remplace dans tout le projet
# Remplace #6366F1 (indigo) par ta couleur
```

**Dans VSCode :**
- Cmd/Ctrl + Shift + F
- Recherche : `#6366F1`
- Remplace par : `#TACOULEUR`

### Désactiver une section

Dans `src/App.tsx`, commente la section :

```tsx
{/* <Testimonials /> */}  {/* ← Section cachée */}
```

### Ajouter une nouvelle section

1. Crée `src/components/MaSection.tsx`
2. Copie la structure d'une section existante
3. Importe dans `App.tsx` :
```tsx
import MaSection from './components/MaSection';

// Dans le return
<MaSection />
```

---

## 📊 Métriques de succès

**Après 1 semaine :**
- 100+ visiteurs uniques
- Bounce rate < 50%
- Temps moyen > 1:30
- 5+ essais de demo

**Après 1 mois :**
- 1000+ visiteurs
- 50+ essais de demo
- 10+ inscriptions newsletter
- 2-3 conversions payantes (si plan Pro actif)

**Tracking :**
- Google Analytics 4
- Hotjar (heatmaps)
- Plausible (alternative privacy-first)

---

## 🆘 Aide & Support

### Docs complètes
- `README.md` - Documentation technique
- `MARKETING.md` - Stratégies marketing
- `ASSETS.md` - Guide des visuels

### Communauté
- GitHub Issues : [ton-repo]/issues
- Discord : [lien-discord]
- Twitter : [@voiclub](https://twitter.com/voiclub)

### Debug en live
```bash
# Lance le dev mode avec logs
npm run dev -- --debug

# Ou check les erreurs build
npm run build -- --mode development
```

---

## 🎉 C'est parti !

Ta landing page est prête. Maintenant :

1. **Teste tout** (desktop + mobile)
2. **Demande feedback** (amis, collègues)
3. **Lance** (Vercel/Netlify)
4. **Partage** (Twitter, Product Hunt, Reddit)
5. **Itère** (A/B test les headlines)

**Premier objectif : 100 visiteurs en 7 jours** 🚀

Bon lancement !

---

Made with ❤️ by [Aurelien Anand](https://github.com/aurelienanand)

Questions ? → hello@voiclubai.cloud
