const { Sequelize } = require('sequelize');
// let portlogin = 5001;
// let usernamelogin = "root";
// let passwordlogin = "1234"


const connection = new Sequelize({
    dialect: "mysql",
    database: "shoes",
    host: "localhost",
    port: 5001,
    username: "root",
    password: "1234"
});

module.exports = connection;