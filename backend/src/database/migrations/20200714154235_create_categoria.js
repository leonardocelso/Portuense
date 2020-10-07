
exports.up = function(knex) {
    return knex.schema.createTable('categoria', function (table) {
        table.engine('InnoDB');

        table.increments('id').primary();

        table.string('nomeCategoria', 50).notNullable();
        table.string('descricao', 150);
        table.dateTime('dataUltModif', 6).notNullable();

        table.integer('usuarioId').unsigned().notNullable().references('id').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('categoria');
};
