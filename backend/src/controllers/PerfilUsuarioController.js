const connection = require('../database/connection');
const getDate = require('../utils/getDate');

module.exports = {
    async index(request, response) {
        const perfisUsuarios = await connection('perfilUsuario').select('*');

        return response.json(perfisUsuarios);
    },

    async indexById (request, response) {
        const { perfilUsuarioId }  = request.params;

        const perfilUsuario = await connection('perfilUsuario')
            .where('id', perfilUsuarioId)
            .select('*')
            .first();
    
        return response.json(perfilUsuario);
    },
    
    async create(request, response) {
        const usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            perfilId,
            usuarioId,
        } = request.body;

        const [id] = await connection('perfilUsuario').insert({
            nomeperfilUsuario,
            descricao,
            usuarioId,
            dataUltModif
        });

        return response.json({ id, nomeperfilUsuario });
    },

    async update(request, response) {
        const { perfilUsuarioId } = request.params;
        const  usuarioId  = request.headers.authorization;
        const dataUltModif = getDate(); 

        const {
            nomeperfilUsuario,
            descricao            
        } = request.body;

        await connection('perfilUsuario').where('id', perfilUsuarioId).update({
            nomeperfilUsuario,
            descricao,
            usuarioId,
            dataUltModif
        });

        return response.status(204).send();
    },
};