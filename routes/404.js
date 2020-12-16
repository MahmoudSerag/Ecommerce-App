// Requirement modules;
const express = require(`express`);
const error = require(`../controller/404`);
const router = express.Router();

router.get(`*`, error.errorHandling);

module.exports = router;