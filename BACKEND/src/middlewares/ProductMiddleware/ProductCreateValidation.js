const { request, response } = require("express");
const ProductAll = require("../../models/ProductAll");
const { FLOAT } = require("sequelize");

const ProductCreateValidation = async (request, response, next) => {
    if(!request.body.name){
        return response.status(400).json({
            message: "o nome do produto é obrigatorio"
        })
    }

    if(!request.body.slug){
        return response.status(400).json({
            message: "o slug do produto é obrigatorio"
        })
    }

    if(!request.body.price){
        return response.status(400).json({
            message:"o preço do produto é obrigatorio"
        })
    }
    if(!request.body.price_witch_discount){
        return response.status(400).json({
            message:"o preço com desconto é obrigatorio"
        })
    }
    if(isNaN(request.body.price) || isNaN(request.body.price_witch_discount)){
        return response.status(400).json({
            message:"o campo price e price with discount so aceita numeros"
        })
    }


    next();
}

module.exports = ProductCreateValidation