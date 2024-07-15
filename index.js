const express = require('express');
const mysql = require("mysql2/promise"); // Using promise version of mysql2
const cors = require('cors');

const app = express();
const port = 3009;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Ryan@786',
    database: 'ryan'
};

let db;
(async () => {
    try {
        db = await mysql.createConnection(dbConfig);
        console.log('Connected to the MySQL database');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
})();

// API route to get students
app.get('/api/students', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM ryan.students');
        res.json(results);
        console.log(results);
    } catch (err) {
        console.error('Error fetching students:', err);
        res.status(500).send('Error fetching students');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

