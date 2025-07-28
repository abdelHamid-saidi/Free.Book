# Free.Book - Plateforme de Partage de Livres

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **Free.Book** est une plateforme communautaire moderne de partage et d'échange de livres gratuits. Développée avec les technologies web les plus récentes, elle offre une expérience utilisateur exceptionnelle pour les passionnés de lecture.

![Free.Book Design](design/01.png)

## Technologies Utilisées

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

## Installation et Configuration

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

## Structure du Projet

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
