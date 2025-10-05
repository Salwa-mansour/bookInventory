const express =require('express');
const bookRouter = express.Router();
const path = require('path');
//const bookController = require('../controllers/bookController');

router.get('/', (req, res) => {
    bookController.getAllbooks(req,res)
});

router.route('/new')
                .get((req,res)=>{bookController.getBookForm(req,res)})
                .post((req,res)=>{bookController.createNewBook(req,res)});

module.exports = bookRouter;
