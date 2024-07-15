const express = require('express');
const mysql = require("mysql2/promise"); // Using promise version of mysql2
const cors = require('cors');

const app = express();
const port = 3004;

// Middleware
app.use(cors());
app.use(express.json());

// Estabhlish connection with database
const connectToDatabase = require('./Database/Database');
let db;
const connectionDatabase = async () => {
    db = await connectToDatabase();
};

connectionDatabase();

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

