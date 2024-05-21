const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');

const Book = sequelize.define('Book', {

    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    auteur: {
        type: DataTypes.STRING,
        allowNull: false
    },
    editeur: {
        type: DataTypes.STRING
    },
    propose_par: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    }
});


module.exports = Book;
