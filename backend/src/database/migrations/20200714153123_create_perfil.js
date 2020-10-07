
exports.up = function(knex) {
    return knex.schema.createTable('perfil', function (table) {
        table.engine('InnoDB');

        table.increments('id').primary();

        table.string('nomePerfil', 50).notNullable();
        table.string('descricao', 150);
        table.dateTime('dataUltModif', 6).notNullable();

        table.integer('usuarioId').unsigned().notNullable().references('id').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfil');
};
