const { body, validationResult } = require("express-validator");

// Middleware to validate the author name
const validateAuthor = [
  body('authorName')
    .notEmpty()
    .withMessage('Author name cannot be empty')
    .trim()
];

  const handleValidationErrors  =  async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // If validation fails, rerender the form
      return res.render('author/create', {
        errors: errors.array(),
        authorName: req.body.authorName
      });
    }
    return next();
  }
  module.exports = {
    validateAuthor,
    handleValidationErrors
}