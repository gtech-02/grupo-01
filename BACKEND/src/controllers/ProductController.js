const ProductAll = require('../models/ProductAll');

const ProductContoller = {
    create(req, res){
        ProductAll.create(req.body);
        res.json({
            message: 'produto cadastrado com sucesso!'
        });
    }
}

module.exports = ProductContoller;