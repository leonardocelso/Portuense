const connection = require('../database/connection');
const getDate = require('../utils/getDate');

module.exports = {
    async index(request, response) {
        const categorias = await connection('categoria').select('*');

        return response.json(categorias);
    },

    async indexById (request, response) {
        const { categoriaId }  = request.params;

        const categoria = await connection('categoria')
            .where('id', categoriaId)
            .select('*')
            .first();
    
        return response.json(categoria);
    },
    
    async create(request, response) {
        const usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            nomeCategoria,
            descricao
        } = request.body;

        const [id] = await connection('categoria').insert({
            nomeCategoria,
            descricao,
            usuarioId,
            dataUltModif
        });

        return response.json({ id, nomeCategoria });
    },

    async update(request, response) {
        const { categoriaId } = request.params;
        const  usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            nomeCategoria,
            descricao            
        } = request.body;

        await connection('categoria').where('id', categoriaId).update({
            nomeCategoria,
            descricao,
            usuarioId,
            dataUltModif
        });

        return response.status(204).send();
    },
};