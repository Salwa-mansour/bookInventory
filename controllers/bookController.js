const db = require("../db/queries");



async function getAllBooks(req, res){

  let books = await db.getAllBooks();
 const booksWithAuthors = [];

  for (const book of books) {
    const author = await db.getAuthorById(book.author_id);
    const category = await db.getCategoryById(book.category_id);
    booksWithAuthors.push({
      bookname: book.bookname,
      author: author.authorname,
      category:category.categoryname
    });
  }

  res.render("book/index", {
    title: "Books list",
    books: booksWithAuthors,
  });
}

async function bookCreateGet(req, res) {
    const categories = await db.getAllCategories();
    const authors =await db.getAllAuthors();
  res.render("book/create", {
    title: "Create Book",
    categories:categories,
    authors:authors
  });
}

async function createNewBook(req, res){


const { bookName,author,category } = req.body;
  await db.insertBook(bookName,author,category);
  res.redirect("/Books");
};

module.exports = {
  getAllBooks,
 bookCreateGet,
  createNewBook
}