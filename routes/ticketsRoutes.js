const express = require('express');
const ticketRoutes = express.Router();
const TicketsController2 = require('../controllers/ticketsController2');

ticketRoutes.get('/', TicketsController2.buscarTodosTickets);
ticketRoutes.get('/:id', TicketsController2.buscarPorId);
ticketRoutes.post('/', TicketsController2.criarTicket);
ticketRoutes.put('/:id', TicketsController2.atualizarTicket);
ticketRoutes.delete('/:id', TicketsController2.deletarTicket);

module.exports = ticketRoutes;