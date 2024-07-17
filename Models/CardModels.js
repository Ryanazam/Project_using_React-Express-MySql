
module.exports = (db) => {
    const getCards = async () => {
             const [results] = await db.query('SELECT * FROM ryan.card');

        return results;


    };


    return {

        getCards


    };

};
