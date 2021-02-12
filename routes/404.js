// Requirement modules;
const express = require(`express`);
const error = require(`../controller/404`);
const router = express.Router();


// @desc    get 404 page
// @route   Get /localhost:3000/errorHandling
// @access  Public
router.get(`*`, error.errorHandling);

module.exports = router;