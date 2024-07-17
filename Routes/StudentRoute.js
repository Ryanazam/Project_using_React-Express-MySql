const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/StudentController');
const cardController =  require("../Controllers/CardController")
module.exports = (db) => {
    const studentscontroller = studentController(db);
    const cardscontroller = cardController(db);

    router.get('/students', studentscontroller.getStudents);
    router.get('/students/image', cardscontroller.getCards);

    return router;
};
