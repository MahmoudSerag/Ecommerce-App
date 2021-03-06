// Requirement modules;
const express = require('express');
const myCart = require('../controller/my-cart');
const router = express.Router();
const isAuth = require('../middleware/is-auth');

// @desc    get my-cart Page
// @route   Get /localhost:3000/my-cart
// @access  Public
router.get(`/my-cart`, isAuth, myCart.getmyCart);


// @desc    redirect to my-cart Page
// @route   Get /localhost:3000/my-cart
// @access  Public
router.post(`/my-cart`, isAuth, myCart.deleteCart);


// @desc    get details Page
// @route   Get /localhost:3000/my-cart/details
// @access  Public
router.post(`/my-cart/details`, myCart.sendDetails);

module.exports = router;