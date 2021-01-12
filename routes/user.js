// Requirement modules;
const express = require('express');
const router = express.Router();
const user = require('../controller/user');


// @desc    get user Page
// @route   Get /localhost:3000/user
// @access  Public
router.get(`/signup`, user.getUserPage);


// @desc    get add-product Page
// @route   Get /localhost:3000/add-product
// @access  Public
router.post(`/`, user.postUser);

module.exports = router;