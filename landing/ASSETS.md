# 🎨 Guide des Assets & Ressources Visuelles

Ce document liste tous les assets nécessaires pour finaliser la landing page et comment les créer/obtenir.

## 📸 Images requises

### 1. Open Graph Image (og-image.jpg)
**Dimensions :** 1200x630px
**Format :** JPG ou PNG
**Taille max :** 1 MB

**Contenu suggéré :**
```
┌─────────────────────────────────────────┐
│  [Logo VoiClub]                         │
│                                         │
│  VoiClub AI                             │
│  Synthèse Vocale Gratuite               │
│                                         │
│  🎤 Transforme du texte en voix         │
│     naturelle en quelques secondes      │
│                                         │
│  ✅ 100% Gratuit  ✅ Sans inscription   │
│                                         │
│  voiclubai.cloud                        │
└─────────────────────────────────────────┘
```

**Outils pour créer :**
- [Canva](https://canva.com) - Templates "Facebook Ad"
- [Figma](https://figma.com) - Design custom
- [Bannerbear](https://bannerbear.com) - Génération automatique
- [OG Image Playground](https://og-playground.vercel.app) - Preview en temps réel

**Placement :**
```
landing/public/og-image.jpg
```

---

### 2. Favicon Set

**Fichiers nécessaires :**
- `favicon.ico` (32x32, 16x16 multi-size)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

**Design suggéré :**
- Icône microphone stylisé
- Couleur : Primary Indigo (#6366F1)
- Fond : Blanc ou transparent
- Style : Moderne, minimal

**Générateur automatique :**
1. Va sur [RealFaviconGenerator](https://realfavicongenerator.net)
2. Upload un PNG 512x512 de ton logo
3. Configure les options
4. Télécharge le package complet
5. Place dans `landing/public/`

**HTML à ajouter dans index.html :**
```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
```

---

### 3. Logo VoiClub

**Formats nécessaires :**
- `logo.svg` - Principal (vectoriel)
- `logo-white.svg` - Version blanche (footer dark)
- `logo.png` - 512x512 (fallback)

**Design suggestions :**

**Option 1 : Typographique**
```
VoiClub
  [onde sonore intégrée dans le "o"]
```

**Option 2 : Icône + Texte**
```
🎤 VoiClub AI
```

**Option 3 : Moderne & Tech**
```
[Forme d'onde abstraite]
VoiClub
```

**Outils design logo :**
- [Canva Logo Maker](https://canva.com/create/logos)
- [Hatchful](https://hatchful.shopify.com) - Gratuit
- [Looka](https://looka.com) - IA powered
- Fiverr (30-50€ pour un pro)

**Placement :**
```
landing/public/logo.svg
landing/public/logo-white.svg
landing/public/logo.png
```

---

### 4. Demo Screenshot/Video

**Option A : Screenshot animé**
- GIF de l'interface de démo
- Dimensions : 800x600px
- Durée : 3-5 secondes loop
- Montre : Texte → Génération → Lecture

**Option B : Video démo**
- MP4, 10-15 secondes
- Pas de son (ou musique d'ambiance)
- Autoplay, muted, loop
- Overlay : "Essaie gratuitement →"

**Outils capture :**
- [ScreenToGif](https://screentogif.com) - Windows
- [Kap](https://getkap.co) - Mac
- [Loom](https://loom.com) - Cross-platform

**Placement :**
```html
<!-- Dans Hero ou Demo section -->
<video autoplay muted loop playsinline>
  <source src="/demo-video.mp4" type="video/mp4">
</video>
```

---

## 🎨 Illustrations & Icons

### Illustrations gratuites

**Sources recommandées :**

1. **[Undraw](https://undraw.co)**
   - Style : Flat, moderne
   - Personnalisation couleur
   - SVG téléchargeables
   - Suggestions pour VoiClub :
     - `audio_conversation.svg` (Features)
     - `podcast_audience.svg` (Use Cases)
     - `celebration.svg` (Success state)

2. **[Storyset](https://storyset.com)**
   - Style : Coloré, animé
   - Catégories utiles :
     - Technology
     - Business
     - Communication
   - Export SVG ou GIF

3. **[Illustrations.co](https://illustrations.co)**
   - Open-source
   - Styles variés
   - MIT License

4. **[DrawKit](https://drawkit.com)**
   - Gratuit + Premium
   - Style cartoon & abstract

**Où utiliser :**
- Section Features (illustrations tech)
- Section Use Cases (personas)
- Section CTA (success illustration)
- 404 page (error illustration)

---

### Icon Sets

**Actuel : Lucide React** ✅
- Déjà installé et utilisé
- 1000+ icons
- Cohérence garantie

**Alternatives (si besoin) :**
- [Heroicons](https://heroicons.com) - Par Tailwind CSS
- [Phosphor Icons](https://phosphoricons.com) - Style moderne
- [Tabler Icons](https://tabler-icons.io) - 3500+ icons

**Icons custom à créer (optionnel) :**
- Logo icon standalone
- Feature icons custom (microphone variants)

---

## 🎬 Animations & Interactions

### Lottie Animations

**Qu'est-ce que Lottie ?**
- Animations JSON légères
- Qualité vectorielle
- Performant

**Où trouver :**
- [LottieFiles](https://lottiefiles.com)
- Recherche : "voice", "audio", "sound wave", "microphone"

**Intégration :**
```bash
npm install lottie-react
```

```tsx
import Lottie from 'lottie-react';
import voiceAnimation from './voice-animation.json';

<Lottie animationData={voiceAnimation} loop={true} />
```

**Suggestions animations :**
1. **Hero background** - Ondes sonores animées
2. **Demo loading** - Microphone pulsant
3. **Success state** - Confetti celebration
4. **Feature icons** - Hover micro-animations

---

### Micro-interactions (CSS/Framer Motion)

**Déjà implémenté :**
- Hover scale sur boutons ✅
- Fade in on scroll ✅
- Wave animation background ✅

**À ajouter (optionnel) :**

1. **Cursor personnalisé**
```tsx
// Sur les CTAs, afficher une forme d'onde miniature
<div className="cursor-custom">
  {/* Mini waveform SVG */}
</div>
```

2. **Typing effect dans Hero**
```tsx
import { motion } from 'framer-motion';

const texts = ["podcasts", "vidéos", "audiobooks", "pubs"];

<motion.span
  animate={{ opacity: [0, 1, 1, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  {currentText}
</motion.span>
```

3. **Progress bar scroll**
```tsx
// Top de page
<motion.div
  className="fixed top-0 left-0 h-1 bg-primary z-50"
  style={{ scaleX: scrollProgress }}
/>
```

---

## 🎵 Assets Audio

### Samples de démonstration

**Fichiers nécessaires :**
- `demo-sophie-fr.mp3` (Voix féminine FR)
- `demo-nicolas-fr.mp3` (Voix masculine FR)
- `demo-emma-en.mp3` (Voix féminine EN)
- `demo-james-en.mp3` (Voix masculine EN)

**Contenu suggéré :**
```
"Bonjour, je suis une voix générée par intelligence artificielle.
Ma qualité est comparable aux solutions professionnelles payantes.
Essayez VoiClub gratuitement dès maintenant."
```

**Génération :**
- Utilise ton propre outil Kokoro TTS
- Qualité : 48kHz, 192kbps MP3
- Durée : 5-10 secondes

**Placement :**
```
landing/public/audio/
  ├── demo-sophie-fr.mp3
  ├── demo-nicolas-fr.mp3
  ├── demo-emma-en.mp3
  └── demo-james-en.mp3
```

---

### Comparaison Before/After

**Demo "TTS robotique" vs "VoiClub" :**

1. **Avant (bad TTS)** - `demo-robotic.mp3`
   - Utilise Google TTS ou espeak
   - Montre la différence de qualité

2. **Après (VoiClub)** - `demo-natural.mp3`
   - Kokoro TTS
   - Même texte, qualité supérieure

**Intégration dans Demo.tsx** (déjà prévu) :
```tsx
<audio ref={roboticRef} src="/audio/demo-robotic.mp3" />
<audio ref={naturalRef} src="/audio/demo-natural.mp3" />
```

---

## 📊 Charts & Data Viz

### Statistiques visuelles

**1. Économies annuelles (Comparison section)**

```tsx
// Bar chart simple
<div className="space-y-4">
  <div>
    <div className="flex justify-between mb-1">
      <span>Eleven Labs</span>
      <span className="font-bold text-red-600">264€/an</span>
    </div>
    <div className="h-8 bg-red-100 rounded-full">
      <div className="h-full w-full bg-red-500 rounded-full" />
    </div>
  </div>

  <div>
    <div className="flex justify-between mb-1">
      <span>VoiClub AI</span>
      <span className="font-bold text-green-600">0€/an</span>
    </div>
    <div className="h-8 bg-green-100 rounded-full">
      <div className="h-full w-0 bg-green-500 rounded-full" />
    </div>
  </div>
</div>
```

**2. Courbe de croissance (About section)**

```tsx
// Line chart - Utilisateurs dans le temps
import { LineChart } from 'recharts'; // ou Chart.js

const data = [
  { month: 'Jan', users: 50 },
  { month: 'Fév', users: 120 },
  { month: 'Mar', users: 280 },
  { month: 'Avr', users: 500 },
];
```

**Librairies recommandées :**
- [Recharts](https://recharts.org) - Simple, React
- [Chart.js](https://chartjs.org) - Puissant
- CSS pur (comme ci-dessus) - Le plus léger

---

## 🎥 Video Marketing

### Video Hero (optionnel)

**Concept :**
- 10-15 secondes
- Montre l'interface en action
- Autoplay, muted
- Fallback sur image si video ne charge pas

**Script exemple :**
```
[0-3s]  : Gros plan texte "Bonjour..." qui s'écrit
[3-5s]  : Clic sur bouton "Générer"
[5-7s]  : Loading animation (ondes)
[7-10s] : Play button + waveform qui bouge
[10-12s]: "VoiClub AI - Gratuit"
```

**Outils création :**
- [Descript](https://descript.com) - Editing simple
- [ScreenFlow](https://telestream.net/screenflow) - Mac
- [OBS Studio](https://obsproject.com) - Gratuit, open-source

---

### Testimonial Videos (Phase 2)

**Format :**
- 30-60 secondes par personne
- Question : "Comment VoiClub a changé ton workflow ?"
- Filmé sur smartphone OK
- Sous-titres obligatoires

**Hébergement :**
- YouTube (unlisted) + embed
- Wistia (payant, analytics)
- Cloudflare Stream (payant, CDN)

---

## 🌈 Color Palette Extended

### Actuelle (primaire)
```css
--primary:     #6366F1 (Indigo)
--secondary:   #8B5CF6 (Violet)
--accent:      #10B981 (Vert)
```

### Extension suggérée
```css
/* Neutrals */
--gray-50:     #F9FAFB
--gray-100:    #F3F4F6
--gray-200:    #E5E7EB
--gray-600:    #4B5563
--gray-900:    #111827

/* Status colors */
--success:     #10B981
--warning:     #F59E0B
--error:       #EF4444
--info:        #3B82F6

/* Gradients */
--gradient-1:  linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)
--gradient-2:  linear-gradient(135deg, #10B981 0%, #059669 100%)
--gradient-3:  linear-gradient(135deg, #F59E0B 0%, #D97706 100%)
```

**Export Figma/Sketch :**
- Crée un fichier design system
- Exporte en CSS variables
- Utilise dans Tailwind config

---

## 📱 App Icons (PWA future)

**Si Progressive Web App :**

**Fichiers nécessaires :**
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`

**Manifest.json :**
```json
{
  "name": "VoiClub AI",
  "short_name": "VoiClub",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#6366F1",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

---

## 🖼️ Image Optimization

### Formats modernes

**WebP pour toutes les images :**
```bash
# Convertir PNG/JPG en WebP
npm install -g cwebp

cwebp -q 80 input.jpg -o output.webp
```

**HTML avec fallback :**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description">
</picture>
```

---

### Lazy Loading

**Déjà implémenté dans React :**
```tsx
<img src="..." loading="lazy" alt="..." />
```

**Pour images critiques (Hero) :**
```tsx
<img src="..." loading="eager" alt="..." />
```

---

### CDN & Optimization

**Services recommandés :**

1. **[Cloudinary](https://cloudinary.com)**
   - Transformation à la volée
   - Gratuit : 25 GB/mois
   ```html
   <img src="https://res.cloudinary.com/demo/image/upload/w_400,f_auto,q_auto/sample.jpg">
   ```

2. **[ImageKit](https://imagekit.io)**
   - Resize automatique
   - Gratuit : 20 GB/mois

3. **[Vercel Image Optimization](https://vercel.com/docs/concepts/image-optimization)**
   - Automatique si déployé sur Vercel
   ```tsx
   import Image from 'next/image';
   <Image src="..." width={500} height={300} alt="..." />
   ```

---

## 📦 Asset Checklist

### Priorité 1 (Critique)
- [ ] Favicon set complet
- [ ] OG image (og-image.jpg)
- [ ] Logo SVG principal
- [ ] 4 samples audio démo

### Priorité 2 (Important)
- [ ] Screenshots/GIFs interface
- [ ] 3-5 illustrations sections
- [ ] Logo white version (footer)
- [ ] Comparaison audio before/after

### Priorité 3 (Nice-to-have)
- [ ] Video hero background
- [ ] Lottie animations
- [ ] Custom cursor
- [ ] Testimonial videos
- [ ] PWA icons

---

## 💾 Organisation des fichiers

**Structure recommandée :**
```
landing/public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── og-image.jpg
├── logo.svg
├── logo-white.svg
├── images/
│   ├── hero-demo.gif
│   ├── feature-1.svg
│   ├── feature-2.svg
│   ├── illustration-usecase.svg
│   └── success-celebration.svg
├── audio/
│   ├── demo-sophie-fr.mp3
│   ├── demo-nicolas-fr.mp3
│   ├── demo-emma-en.mp3
│   ├── demo-james-en.mp3
│   ├── comparison-before.mp3
│   └── comparison-after.mp3
└── video/
    └── hero-demo.mp4
```

---

## 🎨 Design Tools Setup

### Figma/Sketch Import

**Si tu as un design existant :**

1. **Export assets depuis Figma :**
   - Sélectionne layer → Export → SVG/PNG
   - Naming convention : `component-name-variant.svg`

2. **Import dans React :**
   ```tsx
   import IconMic from './assets/icon-mic.svg';
   <img src={IconMic} alt="Microphone" />
   ```

3. **Ou inline SVG :**
   ```tsx
   const IconMic = () => (
     <svg viewBox="0 0 24 24">
       {/* SVG code */}
     </svg>
   );
   ```

---

### Design Tokens Export

**Depuis Figma vers Tailwind :**

1. Plugin [Figma Tokens](https://figma.com/community/plugin/843461159747178978)
2. Export JSON
3. Convert to Tailwind config

**Automatisation :**
```javascript
// figma-to-tailwind.js
const tokens = require('./design-tokens.json');

module.exports = {
  theme: {
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      fontSize: tokens.typography,
    }
  }
}
```

---

## 📚 Resources & Inspiration

### Stock Photos (si besoin)
- [Unsplash](https://unsplash.com) - Gratuit, haute qualité
- [Pexels](https://pexels.com) - Gratuit, vidéos aussi
- [Pixabay](https://pixabay.com) - Gratuit, illustrations

### 3D Assets (trending)
- [Spline](https://spline.design) - 3D web interactif
- [Vectary](https://vectary.com) - 3D editor
- [Blush](https://blush.design) - Illustrations 3D

### Color Palettes
- [Coolors](https://coolors.co) - Générateur
- [ColorHunt](https://colorhunt.co) - Palettes trendy
- [Happy Hues](https://happyhues.co) - Palettes + examples

---

## ✅ Quick Win Assets

**En 1 heure, crée :**

1. **Favicon basique**
   - Emoji microphone 🎤 en PNG
   - Upload sur RealFaviconGenerator
   - Done !

2. **OG Image simple**
   - Canva template "Social Media Post"
   - Texte : "VoiClub AI - Voix IA Gratuite"
   - Background gradient indigo
   - Export 1200x630

3. **Logo texte**
   - Google Fonts "Inter Bold"
   - Texte "VoiClub" + emoji 🎤
   - Export SVG depuis Figma/Canva

4. **4 samples audio**
   - Utilise ton Kokoro TTS
   - Texte simple 2 phrases
   - Export MP3 192kbps

**Total : Assets minimum viable en 60 min** ✅

---

**Besoin d'aide pour créer un asset ?**
→ hello@voiclubai.cloud
→ Je peux recommander des designers freelance

Bon design ! 🎨
