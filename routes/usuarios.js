const express = require('express');
const usuarioRoutes = express.Router();
const UsuariosController = require('../controllers/usuariosController');


usuarioRoutes.get('/', UsuariosController.buscarTodosUsuarios);
usuarioRoutes.post('/register', UsuariosController.criarUsuario);
usuarioRoutes.post('/login', UsuariosController.login);