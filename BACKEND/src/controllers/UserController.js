const UserName = require('../models/UserName')
const bcrypt = require('bcrypt')
const UserController = {
    async create (request, response){

        try {
            const { surname, firstname, password, email } = request.body;

            // Verifica se os campos existem
            if (!surname || !firstname || !password || !email) {
                return response.status(400).json({
                    message: "Nome de usuário e senha são obrigatórios"
                });
            }

            // Verifica se o usuario digitou um email existente
            const emailExisting = await UserName.findOne({ where: { email: email } });
            if (emailExisting) {
                return response.status(400).json({
                    message: "email ja existente"
                });
            }

        }
        catch (error) {
            // Trata erros
            console.error('Erro ao criar usuário:', error);
            return response.status(400).json({
                message: "Erro ao cadastrar usuário"
            });
        }

        //cria a senha com o hash
        const hash = await bcrypt.hash(request.body.password, 9);
        request.body.password = hash;
        await UserName.create(request.body);
        return response.status(201).json({
            message: "usuário cadastrado"
        });
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