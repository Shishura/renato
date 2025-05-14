const express = require('express'); // Importa o módulo express para criar o servidor
const path = require('path'); // Importa o módulo path para manipulação de diretórios e caminhos
const app = express(); // Inicializa a aplicação express
const port = 3000; // Define a porta do servidor como 3000

app.use(express.json()); // Middleware para permitir JSON no body das requisições
app.use(express.urlencoded({ extended: true })); // Middleware para permitir envio de dados via URL
app.use(express.static('public')); // Define a pasta "public" para servir arquivos estáticos (CSS, imagens, JS)
app.set('view engine', 'ejs'); // Define EJS como o motor de template para renderização de páginas HTML

const artigoRoutes = require('./routes/artigoRoutes'); // Importa as rotas de artigos
app.use('/artigos', artigoRoutes); // Usa as rotas de artigos no caminho "/artigos"

app.get('/', (req, res) => {
    res.render('index'); // Responde com a string "index" para requisições na raiz da aplicação
});

app.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`); // Inicia o servidor na porta especificada e exibe mensagem no console
});