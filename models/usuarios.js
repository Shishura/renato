const conexao = require('../conexao');
const { criar } = require('./ticket');

class Usuario {
    listarTodos() {
        const sql = 'SELECT * FROM usuarios';
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, resposta) => {
                if (error) { reject(error); }
                resolve(resposta);
            });
        });
    }


criar(usuario) {
    const { nome, email, senha } = usuario;
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
        conexao.query(sql, [nome, email, senha], (error, resposta) => {
            if (error) {
                console.log('Erro ao criar usuário:', error.message);
                reject(error);
            }
            resolve({ id: resposta.insertId, nome, email });
        });
    });
}
login(email){
    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    return new Promise((resolve, reject) => {
        conexao.query(sql, [email], (error, resposta) => {
            if (error) {
                console.log('Erro ao buscar usuário:', error.message);
                reject(error);
            }
            resolve(resposta[0]);
        });
    });
}
}
module.exports = new Usuario();