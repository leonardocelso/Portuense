
exports.up = function(knex) {
    return knex.schema.createTable('produto', function (table) {
        table.engine('InnoDB');

        table.increments('id').primary();

        table.string('nomeProduto', 50).notNullable();
        table.string('descricao', 150).notNullable();
        table.string('descricaoCurta', 150).notNullable();
        table.string('codigo', 45);
        table.decimal('valor').notNullable();
        table.string('ingredientes', 400);
        table.decimal('porcao');
        table.decimal('carboidratos');
        table.decimal('proteinas');
        table.decimal('gordurasTotais');
        table.decimal('gordurasSaturadas');
        table.decimal('gordurasTrans');
        table.decimal('fibraAlimentar');
        table.decimal('sodio');
        table.boolean('ativo', 1).notNullable();
        table.boolean('telaInicial', 1).notNullable();
        table.dateTime('dataUltModif', 6).notNullable();

        table.integer('unidadeId').unsigned().notNullable().references('id').inTable('unidade');
        table.integer('categoriaId').unsigned().notNullable().references('id').inTable('categoria');
        table.integer('usuarioId').unsigned().notNullable().references('id').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('produto');
};
