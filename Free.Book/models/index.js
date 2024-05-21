const sequelize = require('../config/database.config');

const models = {};

const Author = require('../models/author')(sequelize, DataTypes);
const Book = require('../models/book')(sequelize, DataTypes);

Author.hasMany(Book, { as: 'books' });
Author.belongsToMany(Book, { as: 'books' });
Book.belongsToMany(Author, { as: 'authors' });
Book.belongsTo(Author, { as: 'author' });

module.exports = models;
