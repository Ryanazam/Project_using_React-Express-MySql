const studentModel = require('../Models/StudentModels');

module.exports = (db) => {
    const model = studentModel(db);

    const getStudents = async (req, res) => {
        try {
            const results = await model.getStudents();
            res.json(results);
            console.log(results);
        } catch (err) {
            console.error('Error fetching students:', err);
            res.status(500).send('Error fetching students');
        }
    };

    return {
        getStudents
    };
};
