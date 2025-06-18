const express = require('express');
const jwt = require('jsonwebtoken');
const ticketRoutes = express.Router();
const TicketsController2 = require('../controllers/ticketsController2');

const jwtSecret = 'devwebtoken'



const verificarToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).json({ mensagem: 'Token não fornecido' });
    }

    jwt.verify(token, jwtSecret, (erro, decoded) => {
        if (erro) {
            return res.status(401).json({ mensagem: 'Token inválido' });
        }
        req.userId = decoded.id;
        next();
    });
};

ticketRoutes.get('/', verificarToken, TicketsController2.buscarTodosTickets);
ticketRoutes.get('/:id', verificarToken, TicketsController2.buscarPorId);
ticketRoutes.post('/', verificarToken, TicketsController2.criarTicket);
ticketRoutes.put('/:id', verificarToken, TicketsController2.atualizarTicket);
ticketRoutes.delete('/:id', verificarToken, TicketsController2.deletarTicket);
module.exports = ticketRoutes;