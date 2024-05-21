
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite', // par exemple, utilisez le dialecte approprié pour votre base de données
    storage: './data/database.sqlite' // spécifiez le chemin de stockage de votre base de données SQLite
});

module.exports = sequelize;