const { Sequeliize } = require('sequelize')
let portlogin = 5001;
let usernamelogin = "root";
let passwordlogin = "1234"


const connection = new Sequelize({
    dialect: "mysql",
    database: "Loja",
    host: "localhost",
    port: portlogin,
    username: usernamelogin,
    password: passwordlogin
});

module.exports = connection;