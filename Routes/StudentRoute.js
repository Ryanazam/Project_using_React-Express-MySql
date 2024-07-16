const express = require('express');
const router = express.Router();

module.exports = (db) => {
    
    router.get('/students', async (req, res) => {
        try {
            const [results] = await db.query('SELECT * FROM ryan.students');
            res.json(results);
            console.log(results);
        } catch (err) {
            console.error('Error fetching students:', err);
            res.status(500).send('Error fetching students');
        }
    });

    return router;
};
