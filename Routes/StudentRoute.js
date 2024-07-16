const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/StudentController');

module.exports = (db) => {
    const controller = studentController(db);

    router.get('/students', controller.getStudents);

    return router;
};
