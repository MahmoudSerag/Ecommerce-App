// Requirements modules;
const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');


// @desc    get login Page
// @route   Get /localhost:3000/login
// @access  Public
router.get(`/`, auth.getloginPage);




// @desc    get all-products Page
// @route   Get /localhost:3000/all-products
// @access  Public
router.post(`/login`, auth.postLogin);




// @desc    get login Page
// @route   Get /localhost:3000/
// @access  Public
router.get(`/logout`, auth.postLogout)

module.exports = router;