const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const conexao = require('./conexao');
const tabela = require('./tabela');

criarTabelaUsuarios.init(conexao);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());


const ticketRoutes = require('./routes/ticketsRoutes');
const usuarioRoutes = require('./routes/usuarios');

app.use('/tickets', ticketRoutes);
app.use('/usuarios', usuarioRoutes);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});