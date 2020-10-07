const connection = require('../database/connection');
const getDate = require('../utils/getDate');

module.exports = {
    async index(request, response) {
        const { cliente } = request.query;

        const enderecos = await connection('endereco')
        .modify(function(queryBuilder) {            
            if ( cliente && cliente !== 'Selecione...' ) {
                queryBuilder
                    .where('clienteId', cliente)
            }
        })
        .select('*');

        return response.json(enderecos);
    },

    async indexById (request, response) {
        const { enderecoId }  = request.params;        

        const endereco = await connection('endereco')
            .where('id', enderecoId)
            .select('*')
            .first();
    
        return response.json(endereco);
    },
    
    async create(request, response) {
        const usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            uf,
            enderecoPadrao,
            clienteId
        } = request.body;

        const [id] = await connection('endereco').insert({
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            uf,
            enderecoPadrao,
            clienteId,
            usuarioId,
            dataUltModif
        });

        return response.json({ id, logradouro });
    },

    async update(request, response) {
        const { enderecoId } = request.params;
        const  usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            uf,
            enderecoPadrao,
            clienteId         
        } = request.body;

        await connection('endereco').where('id', enderecoId).update({
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            uf,
            enderecoPadrao,
            clienteId,
            usuarioId,
            dataUltModif
        });

        return response.status(204).send();
    },
};