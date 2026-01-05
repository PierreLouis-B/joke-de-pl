# 😄 Joke de PL 

Une application web moderne pour générer des blagues françaises appropriées pour vos daily meetings !

## 🎯 Fonctionnalités

- ✨ **Design Premium** : Interface moderne avec effets glassmorphism et animations fluides
- 🎲 **2764 Blagues Françaises** : Accès à l'API Blagues-API avec une base massive de blagues
- 🎭 **Format Question/Réponse** : Blagues interactives avec punch lines
- 📊 **Compteur** : Suivez le nombre de blagues générées
- 🚫 **Filtrage intelligent** : Exclut les blagues dark et limit pour rester professionnel
- ⌨️ **Raccourcis clavier** : Appuyez sur Espace ou Entrée pour générer une nouvelle blague
- 📱 **Responsive** : Fonctionne parfaitement sur mobile, tablette et desktop

## 🚀 Installation

### 1. Obtenir un Token API (Gratuit)

1. Allez sur [https://www.blagues-api.fr](https://www.blagues-api.fr)
2. Créez un compte gratuitement
3. Récupérez votre token Bearer depuis votre profil

### 2. Configurer l'Application

Ouvrez le fichier `script.js` et remplacez `'VOTRE_TOKEN_ICI'` à la ligne 6 par votre token :

```javascript
const API_TOKEN = 'votre_token_bearer_ici';
```

### 3. Lancer l'Application

Double-cliquez sur `index.html` et profitez des blagues !

## 🎮 Utilisation

1. **Générer une blague** : Cliquez sur "Nouvelle Blague" ou appuyez sur Espace/Entrée
2. **Lire la blague** : Les blagues avec réponses s'affichent en format question/réponse
3. **Partager** : Égayez vos daily meetings !

## 🛠️ Technologies

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec glassmorphism et animations
- **JavaScript ES6+** : Logique async/await et appels API
- **API** : [Blagues-API](https://www.blagues-api.fr) - 2764 blagues françaises catégorisées

## 📁 Structure du Projet

```
Joke de PL/
├── index.html      # Page principale
├── style.css       # Styles et animations
├── script.js       # Logique JavaScript + intégration API
└── README.md       # Ce fichier
```

## ⚙️ Configuration Avancée

### Filtres de Catégories

Dans `script.js`, vous pouvez modifier les catégories exclues :

```javascript
const DISALLOWED_CATEGORIES = ['dark', 'limit']; // Pour rester professionnel
```

Catégories disponibles :
- `global` - Blagues générales
- `dev` - Blagues de développeurs
- `dark` - Humour noir (exclu par défaut)
- `limit` - Blagues limites (exclu par défaut)
- `beauf` - Blagues beauf
- `blondes` - Blagues de blondes

## 🎨 Caractéristiques du Design

- **Palette** : Dégradés violet/rose dynamiques
- **Typographie** : Police Inter de Google Fonts
- **Effets** :
  - Glassmorphism avec backdrop-filter
  - Animations fluides et micro-interactions
  - Gradient animé en arrière-plan
  - Effets de survol premium
- **Accessibilité** : Design responsive et navigation clavier

## 💡 Astuces

- L'API nécessite une connexion internet
- Les blagues sont filtrées pour rester appropriées au travail
- Format question/réponse pour plus d'interaction
- Raccourcis clavier pour une utilisation rapide

## 🌐 Compatibilité

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Mobile browsers

## 🐛 Dépannage

**"Token non configuré"** : Ajoutez votre token Bearer dans `script.js` ligne 6

**"Token invalide"** : Vérifiez que votre token est correct sur blagues-api.fr

**"Pas de connexion internet"** : L'API nécessite une connexion active

## 📝 Crédits

- API : [Blagues-API](https://www.blagues-api.fr) par la communauté francophone
- Design : Joke de PL

---

Créé avec ❤️ pour égayer vos daily meetings !
