const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const CategoriaController = require('./controllers/CategoriaController');
const PedidoItemController = require('./controllers/PedidoItemController')
const PedidoController = require('./controllers/PedidoController');
const PerfilController = require('./controllers/PerfilController');
const UnidadeController = require('./controllers/UnidadeController');
const ProdutoController = require('./controllers/ProdutoController');
const EnderecoController = require('./controllers/EnderecoController');
const { request } = require('express');

const routes = express.Router();

routes.get('/categoria', CategoriaController.index);
routes.get('/categoria/:categoriaId', CategoriaController.indexById);
routes.post('/categoria', CategoriaController.create);
routes.put('/categoria/:categoriaId', CategoriaController.update);

routes.get('/endereco', EnderecoController.index);
routes.get('/endereco/:enderecoId', EnderecoController.indexById);
routes.post('/endereco', EnderecoController.create);
routes.put('/endereco/:enderecoId', EnderecoController.update);

routes.get('/pedido', PedidoController.index);
routes.get('/pedido/:pedidoId', PedidoController.indexById);
routes.post('/pedido', PedidoController.create);

routes.get('/pedidoItem', PedidoItemController.index);
routes.get('/pedidoItem/:pedidoItemId', PedidoItemController.indexById);

routes.get('/perfil', PerfilController.index);
routes.get('/perfil/:perfilId', PerfilController.indexById);
routes.post('/perfil', PerfilController.create);
routes.put('/perfil/:perfilId', PerfilController.update);

routes.get('/produto', ProdutoController.index);
routes.get('/produto/:produtoId', ProdutoController.indexById);
routes.post('/produto', ProdutoController.create);
routes.put('/produto/:produtoId', ProdutoController.update);

routes.get('/unidade', UnidadeController.index);
routes.get('/unidade/:unidadeId', UnidadeController.indexById);
routes.post('/unidade', UnidadeController.create);
routes.put('/unidade/:unidadeId', UnidadeController.update);

routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:usuarioId', UsuarioController.indexById);
routes.post('/usuario', UsuarioController.create);
routes.put('/usuario/:usuarioId', UsuarioController.update);

module.exports = routes;