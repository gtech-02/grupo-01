const { Sequelize } = require('sequelize');

require('dotenv').config();

const connection = new Sequelize({
    dialect: 'mysql',
    database: 'loja',
    host: 'localhost',
    port: '5001',
    username: 'root',
    password: '1234'
});

module.exports = connection;