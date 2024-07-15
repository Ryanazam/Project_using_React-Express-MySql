const express = require('express');
const mysql = require("mysql2")
const cors = require('cors');

const app = express();
const port = 3009;

// Middleware
app.use(cors());
app.use(express.json());




// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ryan@786',  
   database: 'ryan'    
});


db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
    
});


// API route to get students
app.get('/api/students', (req,res) => {
    const query = 'SELECT * FROM ryan.students';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching students:', err);
            res.status(500).send('Error fetching students');
        } else {
            res.json(results);
            console.log(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


