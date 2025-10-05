const pool = require('./pool');

async function  getAllCategories() {
    const {rows} = await pool.query("SELECT * FROM bookCategory");

    return rows;
}


async function insertCategory(Category) {
    await pool.query("INSERT INTO bookCategory (categoryName) VALUES ($1)",[Category]);
}


module.exports = {
    getAllCategories,
    insertCategory
};