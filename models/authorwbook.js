const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');
// const Author = require('./author');
// const Book = require('./book');

const AuthorWithBook = sequelize.define('AuthorWithBook', {
    datepublie: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = AuthorWithBook;
