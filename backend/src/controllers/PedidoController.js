const connection = require('../database/connection');
const getDate = require('../utils/getDate');
const knexfile = require('../../knexfile');

module.exports = {
    async index(request, response) {
        const { cliente } = request.query;

        const pedidos = await connection('pedido')
        .modify(function(queryBuilder) {            
            if ( cliente && cliente !== 'Selecione...' ) {
                queryBuilder
                    .where('clienteId', cliente)
            }
        })
        .select('*');

        return response.json(pedidos);
    },

    async indexById (request, response) {
        const { pedidoId }  = request.params;

        const pedido = await connection('pedido')
            .where('id', pedidoId)
            .select('*')
            .first();
    
        return response.json(pedido);
    },
    
    async create(request, response) {
        const usuarioId  = request.headers.authorization;
        const dataPedido = getDate(); 
        const dataUltModif = getDate(); 

        const {
            total,
            obsPedido,
            clienteId,
            items
        } = request.body;

        const pedido = {
            total,
            clienteId,
            dataPedido,
            obsPedido,
            usuarioId,
            dataUltModif
        }

        const trx = await connection.transaction();

        const insertedIds = await trx('pedido').insert(pedido);

        const pedidoId = insertedIds[0];

        for ( var i = 0; i < items.length; i++ ) {

            const itemPedido = {
                produtoId : items[i].produtoId,
                quantidade : items[i].quantidade,
                dataUltModif,
                pedidoId,
                usuarioId
            }
  
            await trx('pedidoItem').insert(itemPedido);
        };

        await trx.commit();
            
        return response.json({ "sucess" : true });
    },
    
    // async update(request, response) {
    //     const { pedidoId } = request.params;
    //     const  usuarioId  = request.headers.authorization;
    //     const dataUltModif = getDate(); 

    //     const {
    //         nomepedido,
    //         descricao            
    //     } = request.body;

    //     await connection('pedido').where('id', pedidoId).update({
    //         nomepedido,
    //         descricao,
    //         usuarioId,
    //         dataUltModif
    //     });

    //     return response.status(204).send();
    // },
};