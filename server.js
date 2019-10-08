const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'entrega'
});

app.use(express.json());

app.get('/entregador/:id', (req, resp) => {
    let id_entregador = req.params.id;

    connection.query("SELECT * FROM entregadores WHERE identregador = ?",
    [id_entregador],
    (err, result) => {
        
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            
            resp.json(result);            
        }
    });    
});

app.post('/entregador', (req, resp) => {
    let entregador = req.body;

    if (entregador == null) {
        resp.status(204).end();
    } else {
        connection.query('INSERT INTO entregadores SET ?',
        [entregador], 
        (err, result) => {
            if (err) {
                console.log(err);
                resp.status(500).end();
            } else {
                resp.status(200);
                resp.send(result);
            }
        });
    }    
});

app.put('/entregador/:id', (req, resp) => {
    console.log('Chamou -> /entregador/:id');
    resp.status(200).end();
});

app.delete('entregador/:id', (req, resp) => {
    console.log('Chamou -> /entregador/:id');
    resp.status(200).end();
});

app.get('/remetente/:id', (req, resp) => {
    console.log('Chamou -> /remetente/' + req.params.id);
    resp.status(200).end();
});

app.post('/remetente', (req, resp) => {
    console.log('Chamou -> /remetente');
    resp.status(200).end();
});

app.put('/remetente/:id', (req, resp) => {
    console.log('Chamou -> /remetente/:id');
    resp.status(200).end();
});

app.delete('/remetente/:id', (req, resp) => {
    console.log('Chamou -> /remetente/:id');
    resp.status(200).end();
});

app.get('/viagem/percurso', (req, resp) => {
    console.log('Chamou -> /viagem/percurso');
    resp.status(200).end();
});

app.get('/viagem/:id', (req, resp) => {
    console.log('Chamou -> /viagem/:id');
    resp.status(200).end();
});

app.post('/viagem', (req, resp) => {
    console.log('Chamou -> /viagem');
    resp.status(200).end();
});

app.put('/viagem/:id', (req, resp) => {
    console.log('Chamou -> /viagem/:id');
    resp.status(200).end();
});

app.delete('/viagem/:id', (req, resp) => {
    console.log('Chamou -> /viagem/:id');
    resp.status(200).end();
});

app.get('/envio/:id', (req, resp) => {
    console.log('Chamou -> /envio/:id');
    resp.status(200).end();
});

app.post('/envio', (req, resp) => {
    console.log('Chamou -> /envio');
    resp.status(200).end();
});

app.put('/envio/:id', (req, resp) => {
    console.log('Chamou -> /envio/:id');
    resp.status(200).end();
});

app.delete('/envio/:id', (req, resp) => {
    console.log('Chamou -> /envio/:id');
    resp.status(200).end();
});

app.put('/envio/:id/finalizar', (req, resp) => {
    console.log('Chamou -> /envio/:id/finalizar');
    resp.status(200).end();
});

app.put('/envio/:id/avaliar', (req, resp) => {
    console.log('Chamou -> /envio/:id/avaliar');
    resp.status(200).end();
});

app.listen('3000', () => {
    connection.connect((err) => {
        if (err) return console.log(err);
        console.log('Backend conectado e escutando na porta 3000 ...')
    });    
});