const pool = require('./pool');
// author
async function  getAllAuthors() {
    const {rows} = await pool.query("SELECT * FROM bookAuthor");

    return rows;
}


async function insertAuthor(Author) {
    await pool.query("INSERT INTO bookAuthor (authorName) VALUES ($1)",[Author]);
}

// category
async function  getAllCategories() {
    const {rows} = await pool.query("SELECT * FROM bookCategory");

    return rows;
}


async function insertCategory(Category) {
    await pool.query("INSERT INTO bookCategory (categoryName) VALUES ($1)",[Category]);
}


module.exports = {
    getAllCategories,
    insertCategory,
    getAllAuthors,
    insertAuthor
};