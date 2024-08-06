const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const UserName = connection.define('user', {
    
    id: {
        type: DataTypes.INTEGER
    },
    
    firstname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    surname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    define: {
        timestamps: true,
    },
});

module.exports = UserName;