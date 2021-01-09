// Requirement modules;
const express = require('express');
const isAuth = require('../middleware/is-auth');
const router = express.Router();
const products = require('../controller/add-products');

// @desc    get-product-form
// @route   Get /localhost:3000/add-product
// @access  Public
router.get(`/add-product`, isAuth, products.getProductPage);


// @desc    From add-product page to all-product page
// @route   Get /localhost:3000/all-product
// @access  Public
router.post(`/add-product`, isAuth, products.addProduct);

module.exports = router;