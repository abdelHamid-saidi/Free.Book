const Book = require('../models/book');

var createBook = async (req, res) => {

    try {
        const book = await Book.create({
            titre: req.body.titre,
            auteur: req.body.auteur,
            editeur: req.body.editeur,
            propose_par: req.body.propose_par,
            description: req.body.description
        });

        if (book) {
            // res.render('livre')
            res.send('l\'ajout de l\'élément à la base de données avec succes.');
        } else {
            res.status(500).send('Une erreur s\'est produite lors de l\'ajout de l\'élément à la base de données.');
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'ajout de l\'élément à la base de données:', error);
        res.status(500).send('Une erreur s\'est produite lors de l\'ajout de l\'élément à la base de données.');
    }
};


var findAll = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).send(books);
    } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la récupération des livres.'
        });
    }
};

var findOne = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.status(200).send(book);
        } else {
            res.status(404).send({
                message: 'Livre non trouvé.'
            });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération du livre:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la récupération du livre.'
        });
    }
};

var update = async (req, res) => {
    try {
        const [updated] = await Book.update({
            titre: req.body.titre,
            auteur: req.body.auteur,
            editeur: req.body.editeur,
            propose_par: req.body.propose_par,
            description: req.body.description
        }, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedBook = await Book.findByPk(req.params.id);
            res.status(200).send(updatedBook);
        } else {
            res.status(404).send({
                message: 'Livre non trouvé.'
            });
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour du livre:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la mise à jour du livre.'
        });
    }
};

var deletee = async (req, res) => {
    try {
        const deleted = await Book.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send({
                message: 'Livre supprimé avec succès.'
            });
        } else {
            res.status(404).send({
                message: 'Livre non trouvé.'
            });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression du livre:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la suppression du livre.'
        });
    }
};

var deleteAll = async (req, res) => {
    try {
        const deleted = await Book.destroy({
            where: {},
            truncate: true
        });
        res.status(204).send({
            message: 'Tous les livres ont été supprimés avec succès.'
        });
    } catch (error) {
        console.error('Erreur lors de la suppression de tous les livres:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la suppression de tous les livres.'
        });
    }
};

module.exports = {
    createBook,
    findAll,
    findOne,
    update,
    deletee,
    deleteAll
}