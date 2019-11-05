const express = require('express');

module.exports = (connection) => {
    const router = express.Router();

    router.get('/envio/:id', (req, resp) => {
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
    
    router.post('/envio', (req, resp) => {
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
    
    router.put('/envio/:id', (req, resp) => {
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
    
    router.delete('/envio/:id', (req, resp) => {
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
    
    router.put('/envio/:id/finalizar', (req, resp) => {
        let id_envio = req.params.id;
    
        connection.query('UPDATE envios SET entregou = true WHERE idenvio = ?',
        [id_envio], 
        (err, result ) => {
    
            if (err) {
                console.log(err);
                resp.status(500).end();
            } else {
                resp.status(200).end();
            }
        });
    });
    
    router.put('/envio/:id/avaliar', (req, resp) => {
        let id_envio = req.params.id;
        let avaliacao = req.query.avaliacao;
    
        connection.query('UPDATE envios SET avaliacao = ? WHERE idenvio = ?',
        [avaliacao,id_envio], 
        (err, result ) => {
    
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