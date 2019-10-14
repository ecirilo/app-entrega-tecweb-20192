const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'entrega'
});

const entregador_module = require('./app_modules/entregador.js');
const remetente_module = require('./app_modules/remetente.js');
const viagem_module = require('./app_modules/viagem.js');
const envio_module = require('./app_modules/envio.js');

app.use(express.json());
app.use(entregador_module(connection));
app.use(remetente_module(connection));
app.use(viagem_module(connection));
app.use(envio_module(connection));

app.listen('3000', () => {
    connection.connect((err) => {
        if (err) return console.log(err);
        console.log('Backend conectado e escutando na porta 3000 ...')
    });    
});