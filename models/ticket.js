const conexao = require('../config/conexao');

class Ticket {
    listarTodos() {
        const sql = 'SELECT * FROM tickets';
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if (error) {
                    console.log('Erro ao listar tickets:', error.message);
                    reject(error);
                }
                resolve(resposta);
            });
        });
    }

    buscarPorId(id) {
        const sql = 'SELECT * FROM tickets WHERE codigo = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log('Erro ao buscar ticket:', error.message);
                    reject(error);
                }
                resolve(resposta[0]);
            });
        });
    }

    criar(novoTicket) {
        const { titulo,descricao,dataAbertura,resolvido,userID} = novoTicket
        const sql = 'INSERT INTO tickets (titulo,descricao,dataAbertura,resolvido,userID)VALUES (?,?,?,?,?)';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [titulo,descricao,dataAbertura,resolvido,userID], (error, resposta) => {
                if (error) {
                    console.log('Erro ao criar ticket:', error.message);
                    reject(error);
                }
                resolve({ id: resposta.insertId,titulo,descricao,dataAbertura,resolvido,userID });
            });
        });
    }

    atualizar(id, dadosAtualizados) {
        const sql = 'UPDATE tickets SET ? WHERE codigo = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [dadosAtualizados, id], (error, resposta) => {
                if (error) {
                    console.log('Erro ao atualizar ticket:', error.message);
                    reject(error);
                }
                resolve({ id, ...dadosAtualizados });
            });
        });
    }

    deletar(id) {
        const sql = 'DELETE FROM tickets WHERE codigo = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log('Erro ao deletar ticket:', error.message);
                    reject(error);
                }
                resolve();
            });
        });
    }
}

module.exports = new Ticket();