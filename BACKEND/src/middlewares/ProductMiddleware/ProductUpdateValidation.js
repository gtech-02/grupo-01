
const ProductAll = require("../../models/ProductAll");

const ProductUpdateValidation = async (request, response, next) => {
    if(!request.params.id){
        return response.status(404).json({
            message: "Produto não encontrado"
        })
    }

    next();
}

module.exports = ProductUpdateValidation