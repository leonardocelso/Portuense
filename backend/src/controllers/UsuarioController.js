const connection = require('../database/connection');
const getPassword = require('../utils/getPassword');
const getDate = require('../utils/getDate');

module.exports = {
    async index(request, response) {
        const usuarios = await connection('usuario').select('*');

        return response.json(usuarios);
    },

    async indexById (request, response) {
        const { usuarioId }  = request.params;

        const usuario = await connection('usuario')
            .where('usuario.id', usuarioId)
            .select('*')
            .first();
    
        return response.json(usuario);
    },
    
    async create(request, response) {
        const {
            nome,
            sobrenome,
            dataNasc,
            email,
            senhaForm,
            telefone,
            whatsapp,
            cpf,
            genero,
            ativo
        } = request.body;

        const senha = getPassword(senhaForm); 
        const dataUltModif = getDate(); 

        const [id] = await connection('usuario').insert({
            nome,
            sobrenome,
            dataNasc,
            email,
            senha,
            telefone,
            whatsapp,
            cpf,
            genero,
            ativo,
            dataUltModif
        });

        return response.json({ id, email });
    },

    async update(request, response) {
        const { usuarioId } = request.params;

        const {
            nome,
            sobrenome,
            dataNasc,
            email,
            senhaForm,
            telefone,
            whatsapp,
            cpf,
            genero,
            ativo
        } = request.body;

        const senha = getPassword(senhaForm); 
        const dataUltModif = getDate(); 

        await connection('usuario').where('id', usuarioId).update({
            nome,
            sobrenome,
            dataNasc,
            email,
            senha,
            telefone,
            whatsapp,
            cpf,
            genero,
            ativo,
            dataUltModif
        });

        return response.status(204).send();
    },
};