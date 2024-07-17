const express = require('express');
const studentRoute = require("./Routes/StudentRoute")
const cors = require('cors');
const app = express();
const port = 3005;

// Middleware
app.use(cors());
app.use(express.json());

// Estabhlish connection with database

const connectToDatabase = require('./Database/Database');


const connectionDatabase = async () => {
    let db;
    db = await connectToDatabase();

    app.use('/api',studentRoute(db));

};

connectionDatabase();

// console.log(db)






app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});

