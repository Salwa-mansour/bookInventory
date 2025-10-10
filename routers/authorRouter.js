const express =require('express');
const authorRouter = express.Router();
const path = require('path');
const authorController = require(path.resolve('controllers','authorController'));
const validationMiddleware = require(path.resolve('middleware','validation'));
// A:\jslearning\Node.js-TheOdin\bookInventory\middleWare\validationMiddleware.js
authorRouter.get('/', (req, res) => {
    authorController.getAllAuthors(req,res)
});

authorRouter.route('/create')
                            .get((req, res) => {
                                authorController.authorCreateGet(req, res);
                            })
                            .post(
                                    validationMiddleware.validateAuthor, 
                                    validationMiddleware.handleValidationErrors,
                                    // If validation passes, call your controller function
                                     (req, res) => {
                                    authorController.createNewAuthor(req, res)
                                      }
                        );
module.exports = authorRouter;
