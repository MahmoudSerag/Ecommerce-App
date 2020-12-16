// Requirement modules;
const express = require('express');
const router = express.Router();
const allProducts = require('../controller/all-products');

router.get(`/all-products`, allProducts.getAllProducts);

router.post(`/all-products`, allProducts.postToMyCart);

module.exports = router;