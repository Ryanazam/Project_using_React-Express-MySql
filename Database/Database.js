const mysql  = require("mysql2/promise");

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Ryan@786',
    database: 'ryan'
};

let db;
const connectToDatabase = async () => {
    if (!db) {
        try {
            db = await mysql.createConnection(dbConfig);
            console.log('Connected to the MySQL database');
            
        } catch (err) {
            console.error('Error connecting to the database:', err);
            process.exit(1);
        }
    }
    return db;
};

module.exports = connectToDatabase;