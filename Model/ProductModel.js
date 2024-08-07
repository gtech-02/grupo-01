
const { DataTypes } = require("sequelize");
const ProductModel = connection.define("Products",{
    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:UserModel,
            key:'id'
        },
        onDelete: 'Cascade'
    },
    name:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: DataTypes.TEXT,

    price:{
        type: DataTypes.DECIMAL(6,2),   
        allowNull:false
    },
    enable:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    sizes:{
        type: DataTypes.INTEGER,
        allowNull: true
    }


})

module.exports = ProductModel;
