const cardModel = require('../Models/CardModels');

module.exports = (db) => {
    const model = cardModel(db);

    const getCards = async (req, res) => {
        try {
            const results = await model.getCards();
            res.json(results);
            console.log(results);
        } catch (err) {
            console.error('Error fetching students:', err);
            res.status(500).send('Error fetching image');
        }
    };

    return {
        getCards
    };
};
