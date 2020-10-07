
exports.up = function(knex) {
    return knex.schema.createTable('perfilUsuario', function (table) {
        table.engine('InnoDB');

        table.increments('id').primary();

        table.dateTime('dataUltModif', 6).notNullable();

        table.integer('usuarioPerfilId').unsigned().notNullable().references('id').inTable('usuario');
        table.integer('perfilId').unsigned().notNullable().references('id').inTable('perfil');
        table.integer('usuarioId').unsigned().notNullable().references('id').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfilUsuario');
};
