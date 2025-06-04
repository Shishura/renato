const mysql = require('mysql');
const conexao  = mysql.createConnection({
    host:'localhost',
    database:'devweb',
    port:3306,
    user:'root',
    password:'root'
});

module.exports= conexao;