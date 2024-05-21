const path = require('path');
const express = require('express');
const sequelize = require('./config/database.config');
const app = express();
const Book = require('./models/book');
const authorRoutes = require('./routes/author.routes');
const bookRoutes = require('./routes/book.routes');
app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.use('/api', authorRoutes);
app.use('/api', bookRoutes);

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
        const book = await Book.create({
            titre: req.body.titre,
            auteur: req.body.auteur,
            editeur: req.body.editeur,
            propose_par: req.body.propose_par,
            description: req.body.description
        });

        if (book) {
            res.render('livre');
            // res.send('l\'ajout de l\'élément à la base de données avec succes.');
        } else {
            res.status(500).send('Une erreur s\'est produite lors de l\'ajout de l\'élément à la base de données.');
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'ajout de l\'élément à la base de données:', error);
        res.status(500).send('Une erreur s\'est produite lors de l\'ajout de l\'élément à la base de données.');
    }
});



async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');

        await sequelize.sync({ force: false });
        console.log('Modèles synchronisés avec la base de données.');

        app.listen(PORT, () => {
            console.log(`Le serveur Express écoute sur le port ${PORT}.`);
        });
    } catch (error) {
        console.error('Impossible de démarrer le serveur:', error);
    }
}

startServer();
