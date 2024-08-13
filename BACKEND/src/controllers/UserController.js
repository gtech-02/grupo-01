const UserName = require('../models/UserName')
const bcrypt = require('bcrypt')
const UserController = {
    async create (request, response){
        let hash = await bcrypt.hash(request.body.password, 9); request.body.password = hash
        UserName.create(request.body);
        return response.status(201).json({
            message: "usuário cadastrado"
        }
        )
    },
    async list(request, response){
        let userlist = await UserName.findAll();
        return response.json(userlist)
    },
    async update(request, response){
        let id = request.params.id;
        UserName.update(request.body,{
            where:{ id }
        })
        return response.json({
            message: "usuário atualizado"
        })
    },
    async delete(request, response){
        let id = request.params.id;
        UserName.destroy({
            where:{ id }
        })
        return response.json({
            message: "usuário deletado"
        })
    },
    
}

module.exports = UserController