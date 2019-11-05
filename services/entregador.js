const express = require('express');

module.exports = (connection) => {
    const router = express.Router();
    
    router.get('/entregador/:id', (req, resp) => {
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
    
    router.post('/entregador', (req, resp) => {
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
    
    router.put('/entregador/:id', (req, resp) => {
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
    
    router.delete('/entregador/:id', (req, resp) => {
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

    return router;
}