const express = require('express');

module.exports = (connection) => {
    const router = express.Router();

    router.get('/viagem/percurso', (req, resp) => {
        let origem = req.query.origem;
        let destino = req.query.destino;
    
        let query = 'SELECT * FROM viagens WHERE origem = ? ' + 
            (origem != null && destino != null ? 'AND' : 'OR') +
            ' destino = ?';
    
        connection.query(query,
        [origem, destino], 
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
    
    router.get('/viagem/:id', (req, resp) => {
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
    
    router.post('/viagem', (req, resp) => {
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
    
    router.put('/viagem/:id', (req, resp) => {
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
    
    router.delete('/viagem/:id', (req, resp) => {
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

    return router;
}