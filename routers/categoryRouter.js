const express =require('express');
const categoryRouter = express.Router();
const path = require('path');
const categoryController = require(path.resolve('controllers','categoryController'));

categoryRouter.get('/', (req, res) => {
    categoryController.getAllCategories(req,res)
});

categoryRouter.route('/create')
                .get((req,res)=>{categoryController.categoryCreateGet(req,res)})
                 .post((req,res)=>{categoryController.createNewCategory(req,res)});

module.exports = categoryRouter;
