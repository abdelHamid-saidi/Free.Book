const path = require('path');
const express = require('express');
const fs = require('fs');
const app = express();

// Stockage simple en JSON
const dataFile = './data/books.json';

// Créer le fichier de données s'il n'existe pas
if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
}
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([], null, 2));
}

// Fonctions pour gérer les livres
function getBooks() {
    try {
        const data = fs.readFileSync(dataFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Erreur lors de la lecture des livres:', error);
        return [];
    }
}

function saveBooks(books) {
    try {
        fs.writeFileSync(dataFile, JSON.stringify(books, null, 2));
        return true;
    } catch (error) {
        console.error('Erreur lors de la sauvegarde des livres:', error);
        return false;
    }
}

function addBook(bookData) {
    const books = getBooks();
    const newBook = {
        id: Date.now().toString(),
        ...bookData,
        createdAt: new Date().toISOString()
    };
    books.push(newBook);
    return saveBooks(books) ? newBook : null;
}

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index')
});
app.get('/Auteurs', (req, res) => {
    res.render('Auteurs')
});
app.get('/livre', (req, res) => {
    res.render('livre')
});
app.get('/Utilisateurs', (req, res) => {
    res.render('Utilisateurs')
});
app.get('/form', (req, res) => {
    res.render('form')
});

app.post('/form', async (req, res) => {
    try {
        const book = addBook({
            titre: req.body.titre,
            auteur: req.body.auteur,
            editeur: req.body.editeur,
            propose_par: req.body.propose_par,
            description: req.body.description
        });

        if (book) {
            res.render('livre');
        } else {
            res.status(500).send('Une erreur s\'est produite lors de l\'ajout de l\'élément à la base de données.');
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'ajout de l\'élément à la base de données:', error);
        res.status(500).send('Une erreur s\'est produite lors de l\'ajout de l\'élément à la base de données.');
    }
});

// API Routes
app.get('/api/books', (req, res) => {
    try {
        const books = getBooks();
        res.status(200).json(books);
    } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
        res.status(500).json({
            message: 'Une erreur s\'est produite lors de la récupération des livres.'
        });
    }
});

app.post('/api/book', (req, res) => {
    try {
        const book = addBook(req.body);
        if (book) {
            res.status(201).json(book);
        } else {
            res.status(500).json({
                message: 'Une erreur s\'est produite lors de l\'ajout du livre.'
            });
        }
    } catch (error) {
        console.error('Erreur lors de l\'ajout du livre:', error);
        res.status(500).json({
            message: 'Une erreur s\'est produite lors de l\'ajout du livre.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Le serveur Express écoute sur le port ${PORT}.`);
    console.log(`Accédez à l'application sur: http://localhost:${PORT}`);
});
