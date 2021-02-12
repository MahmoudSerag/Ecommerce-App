// Requirement modules;
const express = require('express');
const router = express.Router();
const allProducts = require('../controller/all-products');
const isAuth = require('../middleware/is-auth');

// @desc    get all-product Page
// @route   Get /localhost:3000/all-products
// @access  Public
router.get(`/all-products`, isAuth, allProducts.getAllProducts);


// @desc    get my-cart Page
// @route   Get /localhost:3000/my-cart
// @access  Public
router.post(`/all-products`, isAuth, allProducts.postToMyCart);

module.exports = router;