
exports.up = function(knex) {
    return knex.schema.createTable('endereco', function (table) {
        table.engine('InnoDB');

        table.increments('id').primary();

        table.string('logradouro', 150).notNullable();
        table.string('numero', 10).notNullable();
        table.string('complemento', 150);
        table.string('bairro', 150).notNullable();
        table.string('cep', 10).notNullable();
        table.string('cidade', 150).notNullable();
        table.string('uf', 2).notNullable();
        table.boolean('enderecoPadrao', 1).notNullable();
        table.dateTime('dataUltModif', 6).notNullable();
        table.boolean('ativo', 1).notNullable();

        table.integer('clienteId').unsigned().notNullable().references('id').inTable('usuario');
        table.integer('usuarioId').unsigned().notNullable().references('id').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('endereco');  
};
