const { request, response } = require('express')
const  ProductModel = require('../Model/ProductModel')

const ProductCreateValidation = async (request, response, next) => {
    if(!request.body.user_id){
        return response.status(400).json({
            message: 'o id de usuario é obrigatorio'
        })
    }
    if(!request.body.name){
        return response.status(400).json({
            message: 'o nome do produto é obrigatorio'
        })
    }
    if(!request.body.price){
        return response.status(400).json({
            message: 'o preço é obrigatorio'
        })
    }
    
}

module.exports = ProductCreateValidation