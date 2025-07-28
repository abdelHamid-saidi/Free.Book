const Book = require('../models/book');
const Author = require('../models/author');

var create = async (req, res) => {
    try {
        const author = await Author.create({
            nom: req.body.nom
        });
        res.status(200).send(author);
    } catch (error) {
        console.error('Erreur lors de la création de l\'auteur:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la création de l\'auteur.'
        });
    }
};

var findAll = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.status(200).send(authors);
    } catch (error) {
        console.error('Erreur lors de la récupération des auteurs:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la récupération des auteurs.'
        });
    }
};

var findOne = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        if (author) {
            res.status(200).send(author);
        } else {
            res.status(404).send({
                message: 'Auteur non trouvé.'
            });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'auteur:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la récupération de l\'auteur.'
        });
    }
};

var update = async (req, res) => {
    try {
        const [updated] = await Author.update({
            nom: req.body.nom
        }, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedAuthor = await Author.findByPk(req.params.id);
            res.status(200).send(updatedAuthor);
        } else {
            res.status(404).send({
                message: 'Auteur non trouvé.'
            });
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'auteur:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la mise à jour de l\'auteur.'
        });
    }
};

var deletee = async (req, res) => {
    try {
        const deleted = await Author.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send({
                message: 'Auteur supprimé avec succès.'
            });
        } else {
            res.status(404).send({
                message: 'Auteur non trouvé.'
            });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'auteur:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la suppression de l\'auteur.'
        });
    }
};

var deleteAll = async (req, res) => {
    try {
        const deleted = await Author.destroy({
            where: {},
            truncate: true
        });
        res.status(204).send({
            message: 'Tous les auteurs ont été supprimés avec succès.'
        });
    } catch (error) {
        console.error('Erreur lors de la suppression de tous les auteurs:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la suppression de tous les auteurs.'
        });
    }
};

var findAllPublished = async (req, res) => {
    try {
        const books = await Book.findAll({
            where: { author: req.params.id }
        });
        res.status(200).send(books);
    } catch (error) {
        console.error('Erreur lors de la récupération des livres de l\'auteur:', error);
        res.status(500).send({
            message: 'Une erreur s\'est produite lors de la récupération des livres de l\'auteur.'
        });
    }
};


module.exports = {
    create,
    findAll,
    findOne,
    update,
    deletee,
    deleteAll,
    findAllPublished
}