
exports.up = function(knex) {
    return knex.schema.createTable('unidade', function (table) {
        table.engine('InnoDB');

        table.increments('id').primary();

        table.string('nomeUnidade', 50).notNullable();
        table.string('abreviacao', 15);
        table.dateTime('dataUltModif', 6).notNullable();

        table.integer('usuarioId').unsigned().notNullable().references('id').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('unidade');
};
