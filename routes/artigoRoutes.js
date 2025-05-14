const express = require('express');
const artigoRoutes = express.Router();
const artigoController = require('../controllers/artigoController');

// Rota para listar todos os artigos
artigoRoutes.get('/', artigoController.listarArtigos);

// Rota para buscar um artigo específico por título
artigoRoutes.get('/:titulo', artigoController.listarTitulos);

// Rota para criar um novo artigo
artigoRoutes.post('/', artigoController.criarTitulo);

// Rota para deletar um artigo pelo título
artigoRoutes.delete('/:titulo', artigoController.removerTitulo);

// Rota para listar todos os autores
artigoRoutes.get('/autores', artigoController.listarAutores);

// Rota para criar um novo autor (com artigo fictício)
artigoRoutes.post('/autor', artigoController.criarAutor);

// Rota para remover um autor (deleta artigos também)
artigoRoutes.delete('/autor/:autor', artigoController.removerAutor);

module.exports = artigoRoutes;
