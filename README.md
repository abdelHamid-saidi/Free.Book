# 📚 Free.Book - Plateforme de Partage de Livres

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **Free.Book** est une plateforme communautaire moderne de partage et d'échange de livres gratuits. Développée avec les technologies web les plus récentes, elle offre une expérience utilisateur exceptionnelle pour les passionnés de lecture.

## 🌟 Fonctionnalités Principales

### 📖 Gestion des Livres
- **Catalogue complet** avec recherche avancée
- **Filtrage par genre**, statut et disponibilité
- **Système d'échange** sécurisé entre membres
- **Évaluation et notation** des livres
- **Photos et descriptions** détaillées

### 👥 Gestion des Utilisateurs
- **Profils personnalisés** avec statistiques
- **Système de suivi** entre membres
- **Messagerie intégrée** pour les échanges
- **Badges et statuts** (vérifié, premium, modérateur)
- **Indicateurs en ligne** en temps réel

### ✍️ Gestion des Auteurs
- **Base de données d'auteurs** complète
- **Biographies et bibliographies** détaillées
- **Système de notation** des auteurs
- **Recherche et filtrage** avancés

### 🎨 Interface Moderne
- **Design responsive** adapté à tous les appareils
- **Animations fluides** et transitions élégantes
- **Thème sombre/clair** pour le confort visuel
- **Navigation intuitive** avec breadcrumbs
- **Spinner de chargement** moderne

## 🛠️ Technologies Utilisées

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **EJS** - Moteur de template
- **Sequelize** - ORM pour la base de données
- **SQLite** - Base de données légère

### Frontend
- **Bootstrap 5** - Framework CSS
- **Font Awesome** - Icônes vectorielles
- **JavaScript ES6+** - Interactivité avancée
- **CSS3** - Animations et transitions
- **HTML5** - Structure sémantique

### Outils de Développement
- **Git** - Contrôle de version
- **npm** - Gestionnaire de paquets
- **WOW.js** - Animations au scroll
- **jQuery** - Manipulation DOM

## 🚀 Installation et Configuration

### Prérequis
- Node.js (version 18.x ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/Free.Book.git
cd Free.Book
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer la base de données**
```bash
# La base de données SQLite sera créée automatiquement
npm run db:init
```

4. **Démarrer l'application**
```bash
npm start
```

5. **Accéder à l'application**
```
http://localhost:3000
```

### Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```env
PORT=3000
NODE_ENV=development
DB_PATH=./data/database.sqlite
```

## 📁 Structure du Projet

```
Free.Book/
├── config/
│   └── database.config.js    # Configuration de la base de données
├── controllers/
│   ├── author.controller.js   # Contrôleur des auteurs
│   └── book.controller.js     # Contrôleur des livres
├── data/
│   ├── books.json            # Données des livres
│   └── database.sqlite       # Base de données SQLite
├── models/
│   ├── author.js             # Modèle Auteur
│   ├── authorwbook.js        # Modèle Auteur-Livre
│   ├── book.js               # Modèle Livre
│   └── index.js              # Configuration des modèles
├── public/
│   ├── css/
│   │   ├── bootstrap.min.css # Bootstrap CSS
│   │   └── style.css         # Styles personnalisés
│   ├── img/                  # Images du projet
│   ├── js/
│   │   ├── index.js          # JavaScript principal
│   │   ├── authors.js        # JavaScript des auteurs
│   │   ├── books.js          # JavaScript des livres
│   │   ├── users.js          # JavaScript des utilisateurs
│   │   ├── form.js           # JavaScript du formulaire
│   │   └── footer.js         # JavaScript du footer
│   └── lib/                  # Bibliothèques externes
├── routes/
│   ├── author.routes.js      # Routes des auteurs
│   └── book.routes.js        # Routes des livres
├── views/
│   ├── index.ejs             # Page d'accueil
│   ├── Auteurs.ejs           # Page des auteurs
│   ├── livre.ejs             # Page des livres
│   ├── Utilisateurs.ejs      # Page des utilisateurs
│   ├── form.ejs              # Formulaire d'ajout
│   ├── Navbar.ejs            # Navigation
│   ├── Footer.ejs            # Pied de page
│   └── Head.ejs              # En-tête avec spinner
├── server.js                 # Point d'entrée de l'application
├── package.json              # Dépendances et scripts
└── README.md                 # Documentation
```

## 🎯 Fonctionnalités Détaillées

### Page d'Accueil
- **Hero Section** avec appel à l'action
- **Statistiques animées** de la communauté
- **Livres récents** avec cartes interactives
- **Fonctionnalités principales** mises en avant
- **Call-to-action** pour rejoindre la communauté

### Gestion des Livres
- **Recherche en temps réel** par titre, auteur, genre
- **Filtrage avancé** par statut et disponibilité
- **Système d'échange** avec validation
- **Favoris et historique** personnel
- **Photos et descriptions** enrichies

### Système d'Utilisateurs
- **Profils détaillés** avec statistiques
- **Système de suivi** entre membres
- **Messagerie privée** pour les échanges
- **Badges de statut** (vérifié, premium, modérateur)
- **Indicateurs en ligne** en temps réel

### Formulaire d'Ajout
- **Validation en temps réel** des champs
- **Upload d'images** avec drag & drop
- **Prévisualisation** des photos
- **Sélection de genre** et langue
- **Évaluation de l'état** du livre

## 🎨 Design et UX

### Interface Moderne
- **Design responsive** adapté mobile/desktop
- **Animations fluides** avec CSS3 et JavaScript
- **Thème cohérent** avec palette de couleurs unifiée
- **Micro-interactions** engageantes
- **Accessibilité** optimisée

### Composants Interactifs
- **Spinner de chargement** moderne
- **Toast notifications** pour le feedback
- **Modales et popups** élégants
- **Tooltips personnalisés** informatifs
- **Boutons et formulaires** stylisés

### Performance
- **Chargement optimisé** des ressources
- **Lazy loading** des images
- **Cache intelligent** des données
- **Compression** des assets
- **CDN** pour les bibliothèques externes

## 🔧 Scripts Disponibles

```bash
# Démarrer l'application en mode développement
npm start

# Démarrer en mode production
npm run production

# Initialiser la base de données
npm run db:init

# Lancer les tests
npm test

# Linter le code
npm run lint

# Builder pour la production
npm run build
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. **Fork** le projet
2. **Créer** une branche pour votre fonctionnalité
3. **Commiter** vos changements
4. **Pousser** vers la branche
5. **Ouvrir** une Pull Request

### Guidelines
- Suivre les conventions de nommage
- Ajouter des tests pour les nouvelles fonctionnalités
- Documenter les nouvelles APIs
- Respecter le style de code existant

## 📝 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Abdelhamid SAIDI**
- **GitHub**: [@saidi-abdelhamid](https://github.com/saidi-abdelhamid)
- **Portfolio**: [saidi-abdelhamid.com](https://saidi-abdelhamid.com)
- **Email**: contact@saidi-abdelhamid.com

## 🙏 Remerciements

- **Bootstrap** pour le framework CSS
- **Font Awesome** pour les icônes
- **Express.js** pour le framework web
- **Sequelize** pour l'ORM
- **La communauté open source** pour l'inspiration

## 📞 Support

Pour toute question ou problème :
- **Issues GitHub**: [Créer une issue](https://github.com/votre-username/Free.Book/issues)
- **Email**: support@freebook.dz
- **Documentation**: [Wiki du projet](https://github.com/votre-username/Free.Book/wiki)

---

⭐ **Si ce projet vous plaît, n'oubliez pas de le star sur GitHub !**
