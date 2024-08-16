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
    if(!request.body.price){
        return response.status(400).json({
            message:"o preço com desconto é obrigatorio"
        })
    }
    if(request.body.price != FLOAT){
        return response.status(400).json({
            message: "o campo preço so aceita numeros."
        })
    }

    next();
}

module.exports = ProductCreateValidation