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
            resp.status(200);    
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
                resp.json(result);
            }
        });
    }    
});

app.put('/entregador/:id', (req, resp) => {
    let id_entregador = req.params.id;
    let entregador = req.body;    

    connection.query('UPDATE entregadores SET ? WHERE identregador = ?',
    [entregador, id_entregador], 
    (err, result ) => {

        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200).end();
        }
    });
});

app.delete('/entregador/:id', (req, resp) => {
    let id_entregador = req.params.id;

    connection.query('DELETE FROM entregadores WHERE identregador = ?',
    [id_entregador], 
    (err, result) => {

        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200).end();
        }
    });
});

app.get('/remetente/:id', (req, resp) => {
    let id_remetente = req.params.id;

    connection.query("SELECT * FROM remetentes WHERE idremetente = ?",
    [id_remetente],
    (err, result) => {
        
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);            
        }
    });
});

app.post('/remetente', (req, resp) => {
    let remetente = req.body;

    if (remetente == null) {
        resp.status(204).end();
    } else {
        connection.query('INSERT INTO remetentes SET ?',
        [remetente], 
        (err, result) => {

            if (err) {
                console.log(err);
                resp.status(500).end();
            } else {
                resp.status(200);
                resp.json(result);
            }
        });
    }
});

app.put('/remetente/:id', (req, resp) => {
    let id_remetente = req.params.id;
    let remetente = req.body;    

    connection.query('UPDATE remetentes SET ? WHERE idremetente = ?',
    [remetente, id_remetente], 
    (err, result ) => {

        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200).end();
        }
    });
});

app.delete('/remetente/:id', (req, resp) => {
    let id_remetente = req.params.id;

    connection.query('DELETE FROM remetentes WHERE idremetente = ?',
    [id_remetente], 
    (err, result) => {

        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200).end();
        }
    });
});

app.get('/viagem/percurso', (req, resp) => {
    console.log('Chamou -> /viagem/percurso');
    resp.status(200).end();
});

app.get('/viagem/:id', (req, resp) => {
    let id_viagem = req.params.id;

    connection.query("SELECT * FROM viagens WHERE idviagem = ?",
    [id_viagem],
    (err, result) => {
        
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {        
            resp.status(200);    
            resp.json(result);            
        }
    });
});

app.post('/viagem', (req, resp) => {
    let viagem = req.body;

    if (viagem == null) {
        resp.status(204).end();
    } else {
        connection.query('INSERT INTO viagens SET ?',
        [viagem], 
        (err, result) => {

            if (err) {
                console.log(err);
                resp.status(500).end();
            } else {
                resp.status(200);
                resp.json(result);
            }
        });
    }
});

app.put('/viagem/:id', (req, resp) => {
    let id_viagem = req.params.id;
    let viagem = req.body;    

    connection.query('UPDATE viagens SET ? WHERE idviagem = ?',
    [viagem, id_viagem], 
    (err, result ) => {

        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200).end();
        }
    });
});

app.delete('/viagem/:id', (req, resp) => {
    let id_viagem = req.params.id;

    connection.query('DELETE FROM viagens WHERE idviagem = ?',
    [id_viagem], 
    (err, result) => {

        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200).end();
        }
    });
});

app.get('/envio/:id', (req, resp) => {
    let id_envio = req.params.id;

    connection.query("SELECT * FROM envios WHERE idenvio = ?",
    [id_envio],
    (err, result) => {
        
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {        
            resp.status(200);    
            resp.json(result);            
        }
    });
});

app.post('/envio', (req, resp) => {
    let envio = req.body;

    if (envio == null) {
        resp.status(204).end();
    } else {
        connection.query('INSERT INTO envios SET ?',
        [envio], 
        (err, result) => {

            if (err) {
                console.log(err);
                resp.status(500).end();
            } else {
                resp.status(200);
                resp.json(result);
            }
        });
    }
});

app.put('/envio/:id', (req, resp) => {
    let id_envio = req.params.id;
    let envio = req.body;    

    connection.query('UPDATE envios SET ? WHERE idenvio = ?',
    [envio, id_envio], 
    (err, result ) => {

        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200).end();
        }
    });
});

app.delete('/envio/:id', (req, resp) => {
    let id_envio = req.params.id;

    connection.query('DELETE FROM envios WHERE idenvio = ?',
    [id_envio], 
    (err, result) => {

        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200).end();
        }
    });
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