const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'entrega'
});

var cors = require('cors');
app.use(cors());

const entregador_service = require('./services/entregador.js');

verifica_token = (req, resp, next) => {
    let token = req.headers['x-access-token'];

    console.log("Chegou");
    console.log(token);

    if (!token)
        return resp.status(401).end();

    jwt.verify(token, 'gabigolemelhoquezico', (err, decoded) => {
        if (err)
            return resp.status(401).end();

        req.id_usuario_logado = decoded.id
        next();
    });
}

app.use(express.json());
app.use(entregador_service(connection, verifica_token));

const jwt = require('jsonwebtoken');

app.post('/auth', (req, resp) => {
    let user = req.body;    

    connection.query("SELECT * FROM usuarios WHERE nome = ? and senha = ?",
    [user.nome, user.senha],
    (err, result) => {

        if (result.length == 0) {
            resp.status(401);
            resp.send({token: null, success: false});
        } else {
            let token = jwt.sign({id: result[0].idusuario}, 'gabigolemelhoquezico', {
                expiresIn: 6000        
            });
    
            resp.status(200);
            resp.send({token: token, success: true});
        }        
    })
});

app.get('/remetente/:id', verifica_token, (req, resp) => {
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

app.post('/remetente', verifica_token, (req, resp) => {
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

app.put('/remetente/:id', verifica_token, (req, resp) => {
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

app.delete('/remetente/:id', verifica_token, (req, resp) => {
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

app.get('/viagem/percurso', verifica_token, (req, resp) => {
    console.log('Chamou -> /viagem/percurso');
    resp.status(200).end();
});

app.get('/viagens', verifica_token, (req, resp) => {
    connection.query("SELECT * " +
                "FROM viagens as v " +
                "JOIN entregadores as e on v.identregador = e.identregador " + 
                "WHERE v.idusuario = ?",
    [req.id_usuario_logado],
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


app.get('/viagem/:id', verifica_token, (req, resp) => {
    let id_viagem = req.params.id;

    connection.query("SELECT * FROM viagens WHERE idviagem = ?",
    [id_viagem],
    (err, result) => {
        
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {        
            resp.status(200);    
            resp.json(result[0]);            
        }
    });
});

app.post('/viagem', verifica_token, (req, resp) => {
    let viagem = req.body;
    
    console.log(viagem);

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

app.put('/viagem/:id', verifica_token, (req, resp) => {
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

app.delete('/viagem/:id', verifica_token, (req, resp) => {
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

app.get('/envios', verifica_token, (req, resp) => {
    connection.query("SELECT * FROM envios",
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

app.get('/envio/:id', verifica_token, (req, resp) => {
    let id_envio = req.params.id;

    connection.query("SELECT * FROM envios WHERE idenvio = ?",
    [id_envio],
    (err, result) => {
        
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {        
            resp.status(200);    
            resp.json(result[0]);            
        }
    });
});

app.post('/envio', verifica_token, (req, resp) => {
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

app.put('/envio/:id', verifica_token, (req, resp) => {
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

app.delete('/envio/:id', verifica_token, (req, resp) => {
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

app.put('/envio/:id/finalizar', verifica_token, (req, resp) => {
    console.log('Chamou -> /envio/:id/finalizar');
    resp.status(200).end();
});

app.put('/envio/:id/avaliar', verifica_token, (req, resp) => {
    console.log('Chamou -> /envio/:id/avaliar');
    resp.status(200).end();
});

app.listen('3000', () => {
    connection.connect((err) => {
        if (err) return console.log(err);
        console.log('Backend conectado e escutando na porta 3000 ...')
    });    
});