const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');
// const Book = require('./book');

const Author = sequelize.define('Author', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Author;
