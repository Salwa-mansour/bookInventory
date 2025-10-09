const express =require('express');
const bookRouter = express.Router();
const path = require('path');
const bookController = require(path.resolve('controllers','bookController'));

bookRouter.get('/', (req, res) => {
    bookController.getAllBooks(req,res)
});

bookRouter.route('/create')
                .get((req,res)=>{bookController.bookCreateGet(req,res)})
                 .post((req,res)=>{bookController.createNewBook(req,res)});

module.exports = bookRouter;
