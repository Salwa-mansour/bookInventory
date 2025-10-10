const db = require("../db/queries");



async function getAllAuthors(req, res){

  const bookAuthors = await db.getAllAuthors();


  res.render("author/index", {
    title: "Authors list",
    authors: bookAuthors,
  });
}

function authorCreateGet(req, res) {
  res.render("author/create", {
    title: "Create author",
  });
}

async function createNewAuthor(req, res){


const { authorName } = req.body;
  await db.insertAuthor(authorName);
  res.redirect("/authors");
};

module.exports = {
  getAllAuthors,
 authorCreateGet,
  createNewAuthor
}