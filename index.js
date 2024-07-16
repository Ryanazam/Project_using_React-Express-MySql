const express = require('express');
const mysql = require("mysql2/promise"); // Using promise version of mysql2
const cors = require('cors');

const app = express();
const port = 3009;

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

const studentRoute = require("./Routes/StudentRoute")

app.use('/api',studentRoute(db));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

