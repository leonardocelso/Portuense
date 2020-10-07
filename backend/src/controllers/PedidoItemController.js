const connection = require('../database/connection');
const getDate = require('../utils/getDate');
const knexfile = require('../../knexfile');

module.exports = {
    async index(request, response) {
        const { pedido } = request.query;

        const items = await connection('pedidoItem')
        .modify(function(queryBuilder) {            
            if ( pedido && pedido !== 'Selecione...' ) {
                queryBuilder
                    .where('pedidoId', pedido)
            }
        })
        .select('*');

        return response.json(items);
    },

    async indexById (request, response) {
        const { pedidoItemId }  = request.params;

        const pedidoItem = await connection('pedidoItem')
            .where('id', pedidoItemId)
            .select('*')
            .first();
    
        return response.json(pedidoItem);
    },    
};