
// EM TESTE


const { request } = require('http')
const ProductModel = require('../Model/ProductModel')
const { response } = require('express')

const ProductListValidation = async (request,response, next) =>{
let token = request.headers.authorization? request.headers.authorization.split(' '):''
token = token? token[1]: ''

if(!token){
    response.json({message: "token invalido"})
}
else{

let authSecret = 'Sfk802$#djhsa@Sf93s2&(3'
let decoded = jwt.verify(token, authSecret)
}
next() 
}
module.exports = ProductListValidation
