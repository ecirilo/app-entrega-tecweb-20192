const express = require('express');

module.exports = (connection) => {
    const router = express.Router();

    router.get('/remetente/:id', (req, resp) => {
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
    
    router.post('/remetente', (req, resp) => {
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
    
    router.put('/remetente/:id', (req, resp) => {
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
    
    router.delete('/remetente/:id', (req, resp) => {
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

    return router;
};