
exports.up = function(knex) {
    return knex.schema.createTable('pedidoItem', function (table) {
        table.engine('InnoDB');

        table.increments('id').primary();

        table.decimal('quantidade').notNullable();
        table.dateTime('dataUltModif', 6).notNullable();

        table.integer('pedidoId').unsigned().notNullable().references('id').inTable('pedido');
        table.integer('produtoId').unsigned().notNullable().references('id').inTable('produto');
        table.integer('usuarioId').unsigned().notNullable().references('id').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedidoItem');
};
