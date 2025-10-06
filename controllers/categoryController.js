const db = require("../db/queries");



async function getAllCategories(req, res){

  const bookCategories = await db.getAllCategories();
 

  res.render("category/index", {
    title: "categories list",
    categories: bookCategories,
  });
}

function categoryCreateGet(req, res) {
  res.render("category/create", {
    title: "Create category",
  });
}

async function createNewCategory(req, res){


    const { categoryName } = req.body;
  await db.insertCategory(categoryName);
  res.redirect("/");
};

module.exports = {
  getAllCategories,
 categoryCreateGet,
  createNewCategory
}