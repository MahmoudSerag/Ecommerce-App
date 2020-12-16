// Requirement modules;
const express = require('express');
const router = express.Router();
const user = require('../controller/user');

router.get(`/`, user.getUserPage);

router.post(`/`, user.postUser);

module.exports = router;