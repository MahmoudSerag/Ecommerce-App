// Requirement modules;
const express = require('express');
const router = express.Router();
const products = require('../controller/add-products');

router.get(`/add-product`, products.getProductPage);

router.post(`/add-product`, products.addProduct);

module.exports = router;