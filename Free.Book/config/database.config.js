
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:', // Utilise une base de données en mémoire pour le développement
    logging: false // Désactive les logs SQL pour plus de clarté
});

module.exports = sequelize;