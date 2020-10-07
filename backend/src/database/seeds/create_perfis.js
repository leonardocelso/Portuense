exports.seed = function(knex) {
    return knex('perfil').insert([
        { nomePerfil : 'Operador', descricao: 'Acesso restrito ao sistema', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomePerfil : 'Cliente', descricao: 'Acesso à lista de produtos e realização de pedidos', dataUltModif: '2020-07-15', usuarioId: 1},
        { nomePerfil : 'Administrador', descricao: 'Acesso a todas as listas, páginas e relatórios', dataUltModif: '2020-07-15', usuarioId: 1},
    ]);
}