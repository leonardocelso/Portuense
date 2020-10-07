exports.seed = function(knex) {
    return knex('categoria').insert([
        { nomeCategoria : 'Lanches', descricao: 'Sanduíches, Hambúrgueres e Beirutes', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Matinais', descricao: 'Servidos até as 11h da manhã', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Bebidas', descricao: 'Sucos, águas e Refrigerantes', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Frutas', descricao: 'Frutas da estação', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Acompanhamentos', descricao: 'Aperitivos e porções', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Cafés', descricao: 'Cafés e sachês', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Tapiocas', descricao: 'Tapiocas doces e salgadas', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Pratos de Verão', descricao: 'Pratos leves', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Almoço', descricao: 'Servidos das 11h30 às 15h', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Sopas', descricao: 'Servidos a partir das 18h', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomeCategoria : 'Pizzas', descricao: 'Pizzas grandes e brotinhos', dataUltModif: '2020-07-15', usuarioId: 1},
    ]);
}