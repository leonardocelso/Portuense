
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table) {
        table.engine('InnoDB');
    
        table.increments('id').primary();   
             
        table.string('nome', 100).notNullable();
        table.string('sobrenome', 100).notNullable();
        table.dateTime('dataNasc', 6).notNullable();
        table.string('email', 250).notNullable();
        table.string('senha', 400).notNullable();        
        table.string('telefone', 15);
        table.string('whatsapp', 15).notNullable();
        table.string('cpf', 15);
        table.string('genero', 1);
        table.boolean('ativo', 1).notNullable();
        table.dateTime('dataUltModif', 6).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');  
};
