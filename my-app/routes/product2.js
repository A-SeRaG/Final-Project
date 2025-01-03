const express = require('express');
const router = express.Router();
const db = require('../utils/db'); 

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch products', details: err.message });
    }
});

module.exports = router;
