
const ProductAll = require('../models/ProductAll');

const ProductContoller = {
    async create(request, response){
        request
        ProductAll.create(request.body);
        return response.status(201).json({
            message: "produto cadastrado"
        })
      },

    async list(request, response){
        let productsList = await ProductAll.findAll();
        return response.json(productsList)
    },
    
    async update(request, response){
    let id = request.params.id;
        ProductAll.update(request.body,{
            where:{ id }
        })
        return response.json({
            message: "produto atualizado"
        })
    },

    async delete(request, response){
        let id = request.params.id;
        ProductAll.destroy({
            where:{ id }
        });

        return response.json({
            message: "produto deletado"
        })
    }
}

module.exports = ProductContoller

