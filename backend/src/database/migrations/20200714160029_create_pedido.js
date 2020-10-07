
exports.up = function(knex) {
    return knex.schema.createTable('pedido', function (table) {
        table.engine('InnoDB');

        table.increments('id').primary();

        table.decimal('total').notNullable();
        table.dateTime('dataPedido', 6).notNullable();
        table.dateTime('dataUltModif', 6).notNullable();
        table.string('obsPedido', 400);

        table.integer('clienteId').unsigned().notNullable().references('id').inTable('usuario');
        table.integer('usuarioId').unsigned().notNullable().references('id').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedido');
};
