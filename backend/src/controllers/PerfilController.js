const connection = require('../database/connection');
const getDate = require('../utils/getDate');

module.exports = {
    async index(request, response) {
        const perfis = await connection('perfil').select('*');

        return response.json(perfis);
    },

    async indexById (request, response) {
        const { perfilId }  = request.params;

        const perfil = await connection('perfil')
            .where('id', perfilId)
            .select('*')
            .first();
    
        return response.json(perfil);
    },
    
    async create(request, response) {
        const usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            nomePerfil,
            descricao
        } = request.body;

        const [id] = await connection('perfil').insert({
            nomePerfil,
            descricao,
            usuarioId,
            dataUltModif
        });

        return response.json({ id, nomePerfil });
    },

    async update(request, response) {
        const { perfilId } = request.params;
        const  usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            nomePerfil,
            descricao            
        } = request.body;

        await connection('perfil').where('id', perfilId).update({
            nomePerfil,
            descricao,
            usuarioId,
            dataUltModif
        });

        return response.status(204).send();
    },
};