const connection = require('../database/connection');
const getDate = require('../utils/getDate');

module.exports = {
    async index(request, response) {
        const unidades = await connection('unidade').select('*');

        return response.json(unidades);
    },

    async indexById (request, response) {
        const { unidadeId }  = request.params;

        const unidade = await connection('unidade')
            .where('id', unidadeId)
            .select('*')
            .first();
    
        return response.json(unidade);
    },
    
    async create(request, response) {
        const usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            nomeUnidade,
            abreviacao
        } = request.body;

        const [id] = await connection('unidade').insert({
            nomeUnidade,
            abreviacao,
            usuarioId,
            dataUltModif
        });

        return response.json({ id, nomeUnidade });
    },

    async update(request, response) {
        const { unidadeId } = request.params;
        const  usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            nomeUnidade,
            abreviacao            
        } = request.body;

        await connection('unidade').where('id', unidadeId).update({
            nomeUnidade,
            abreviacao,
            usuarioId,
            dataUltModif
        });

        return response.status(204).send();
    },
};