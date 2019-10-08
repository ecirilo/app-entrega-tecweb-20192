const express = require('express');
const app = express();

app.use(express.json());

app.get('/entregador/:id', (req, resp) => {
    console.log('Chamou -> /entregador/:id');
    resp.status(200).end();
});

app.post('/entregador', (req, resp) => {
    console.log('Chamou -> /entregador');
    resp.status(200).end();
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
    console.log('Backend escutando na porta 3000 ...')
});