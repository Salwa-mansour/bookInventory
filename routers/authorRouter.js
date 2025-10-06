const express =require('express');
const authorRouter = express.Router();
const path = require('path');
const authorController = require(path.resolve('controllers','authorController'));

authorRouter.get('/', (req, res) => {
    authorController.getAllAuthors(req,res)
});

authorRouter.route('/create')
                .get((req,res)=>{authorController.authorCreateGet(req,res)})
                 .post((req,res)=>{authorController.createNewAuthor(req,res)});

module.exports = authorRouter;
