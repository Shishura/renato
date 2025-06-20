const ticket = require('../models/ticket');
const Ticket = require('../models/ticket');

class TicketsController {
  cadastrarTicket(req, res) {
    const { titulo, descricao, dataAbertura, resolvido } = req.body;
    const novoTicket = { titulo: titulo, descricao: descricao, dataAbertura: dataAbertura, resolvido: resolvido, userID: req.userId };
    const ticktSalvo = ticket.criar(novoTicket);
    ticketSalvo
        .then(usuario => res.status(200).json(usuario))
        .catch(erro => res.status(500).json(erro.message));
    }

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const resultado = await Ticket.buscarPorId(id);
            if (!resultado) {
                res.status(404).json({ mensagem: 'Ticket não encontrado' });
                return;
            }
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao buscar ticket', erro: error.message });
        }
    }

    async criarTicket(req, res) {
        try {
            const novoTicket = req.body;
            const resultado = await Ticket.criar(novoTicket);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao criar ticket', erro: error.message });
        }
    }

    async atualizarTicket(req, res) {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const resultado = await Ticket.atualizar(id, dadosAtualizados);
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao atualizar ticket', erro: error.message });
        }
    }

    async deletarTicket(req, res) {
        try {
            const { id } = req.params;
            await Ticket.deletar(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao deletar ticket', erro: error.message });
        }
    }
}

module.exports = new TicketsController();