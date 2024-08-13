const { request, response } = require('express')
const CategoriaModel = require('../../models/CategoriaModel')


const CategoryValidaçao = async(request, response, next)=>{
    if(!request.body.name ){
        response.status(400).json({
            messege:"nomes é obrigatorios"
        })
    }
    if(!request.body.slug){
        return response.status(400).json({
            message: "o slug é obrigatorio"
        })
    } next()

}


module.exports = CategoryValidaçao