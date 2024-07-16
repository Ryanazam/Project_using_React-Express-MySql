
module.exports = (db) => {
    const getStudents = async () => {
        const [results] = await db.query('SELECT * FROM ryan.students');
        return results;
    };

    return {
        getStudents
    };
};
