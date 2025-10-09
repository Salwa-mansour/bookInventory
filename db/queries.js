const pool = require('./pool');
// book
async function  getAllBooks() {
     try {
          const {rows} = await pool.query("SELECT * FROM books");
          return rows;

     } catch (error) {
         console.error("Error :", error);
          throw error;
  }
}


async function insertBook(bookName,authorId,categoryId) {
    try{
        await pool.query("INSERT INTO books (bookname, author_id ,category_id) VALUES ($1, $2, $3)",
        [bookName, authorId,categoryId]);
     } catch (error) {
         console.error("Error :", error);
          throw error;
     }
}
// author
async function  getAllAuthors() {
    try{
    const {rows} = await pool.query("SELECT * FROM bookAuthor");

    return rows;
     } catch (error) {
         console.error("Error :", error);
          throw error;
  }
}


async function insertAuthor(Author) {
    try{
         await pool.query("INSERT INTO bookAuthor (authorName) VALUES ($1)",[Author]);
     } catch (error) {
         console.error("Error :", error);
          throw error;
  }
}
async function getAuthorById(author_id) {
    try{
        const {rows} = await pool.query("SELECT (authorName) FROM bookAuthor WHERE id = $1", [author_id]);
        console.log(rows)
        return rows[0];
     } catch (error) {
         console.error("Error :", error);
          throw error;
  }
}
async function getCategoryById(category_id) {
    try{
        const {rows} = await pool.query("SELECT (categoryName) FROM bookCategory WHERE id = $1", [category_id]);
        return rows[0];
     } catch (error) {
         console.error("Error :", error);
          throw error;
  }
}
// category
async function  getAllCategories() {
    try{
        const {rows} = await pool.query("SELECT * FROM bookCategory");
        return rows;
     } catch (error) {
         console.error("Error :", error);
          throw error;
  }
}


async function insertCategory(Category) {
    try{
       await pool.query("INSERT INTO bookCategory (categoryName) VALUES ($1)",[Category]);
     } catch (error) {
         console.error("Error :", error);
          throw error;
  }
}


module.exports = {
    getAllCategories,
    insertCategory,
    getCategoryById,
    getAllAuthors,
    insertAuthor,
    getAuthorById,
    getAllBooks,
    insertBook
};