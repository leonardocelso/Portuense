const connection = require('../database/connection');
const getPassword = require('../utils/getPassword');
const getDate = require('../utils/getDate');

module.exports = {
    async index(request, response) {
        const produtos = await connection('produto').select('*');

        return response.json(produtos);
    },

    async indexById (request, response) {
        const { produtoId }  = request.params;

        const produto = await connection('produto')
            .where('id', produtoId)
            .select('*')
            .first();
    
        return response.json(produto);
    },
    
    async create(request, response) {
        const  usuarioId  = request.headers.authorization;

        const {
            nomeProduto,
            descricao,
            descricaoCurta,
            codigo,
            valor,
            ingredientes,
            porcao,
            carboidratos,
            proteinas,
            gordurasTotais,
            gordurasSaturadas,
            gordurasTrans,
            fibraAlimentar,
            sodio,
            telaInicial,
            unidadeId,
            categoriaId,            
            ativo
        } = request.body;

        const dataUltModif = getDate(); 

        const [id] = await connection('produto').insert({
            nomeProduto,
            descricao,
            descricaoCurta,
            codigo,
            valor,
            ingredientes,
            porcao,
            carboidratos,
            proteinas,
            gordurasTotais,
            gordurasSaturadas,
            gordurasTrans,
            fibraAlimentar,
            sodio,
            telaInicial,
            unidadeId,
            categoriaId,
            usuarioId,
            ativo,
            dataUltModif
        });

        return response.json({ id, nomeProduto });
    },

    async update(request, response) {
        const  usuarioId  = request.headers.authorization;
        const { produtoId } = request.params;

        const {
            nomeProduto,
            descricao,
            descricaoCurta,
            codigo,
            valor,
            ingredientes,
            porcao,
            carboidratos,
            proteinas,
            gordurasTotais,
            gordurasSaturadas,
            gordurasTrans,
            fibraAlimentar,
            sodio,
            telaInicial,
            unidadeId,
            categoriaId,            
            ativo
        } = request.body;

        const dataUltModif = getDate(); 

        await connection('produto').where('id', produtoId).update({
            nomeProduto,
            descricao,
            descricaoCurta,
            codigo,
            valor,
            ingredientes,
            porcao,
            carboidratos,
            proteinas,
            gordurasTotais,
            gordurasSaturadas,
            gordurasTrans,
            fibraAlimentar,
            sodio,
            telaInicial,
            unidadeId,
            categoriaId,
            usuarioId,
            ativo,
            dataUltModif
        });

        return response.status(204).send();
    },
};