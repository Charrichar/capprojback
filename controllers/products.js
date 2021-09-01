const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM products ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    postgres.query(`INSERT INTO products (image, price, name, description) VALUES ('${req.body.image}', ${req.body.price}, '${req.body.name}', '${req.body.description}')`, (err, results) => {
        postgres.query('SELECT * FROM products ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM products WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM products ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    postgres.query(`UPDATE products SET image = '${req.body.image}', price = ${req.body.price}, name = '${req.body.name}', description = '${req.body.description}' WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM products ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
