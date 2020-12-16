// Requirement modules;
const express = require('express');
const myCart = require('../controller/my-cart');
const router = express.Router();

router.get(`/my-cart`, myCart.getmyCart);

router.post(`/my-cart`, myCart.deleteCart);

router.post(`/my-cart/details`, myCart.sendDetails);

module.exports = router;