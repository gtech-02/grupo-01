const { Sequelize } = require('sequelize');
// let portlogin = 5001;
// let usernamelogin = "root";
// let passwordlogin = "1234"

require('dotenv').config();

const connection = new Sequelize({
    dialect: process.env.DB_DRIVER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

module.exports = connection;