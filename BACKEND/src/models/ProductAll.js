const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductAll = connection.define('shoes', {
    id: {
        type: DataTypes.INTEGER
    },
    
    enabled: {
        type: DataTypes.BOOLEAN,
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    slug: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    use_in_menu: {
        type: DataTypes.BOOLEAN,
    },

    stock: {
        type: DataTypes.INTEGER
    },

    description: {
        type: DataTypes.STRING(225),
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    price_witch_discount: {
        type: DataTypes.false,
        allowNull: false
    },

    define: {
        timestamps: true,
    },
});

module.exports = ProductAll;
