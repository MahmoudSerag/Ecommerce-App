// Required Modules;
const express = require('express');
const isAuth = require('../middleware/is-auth');
const router = express.Router();
const verify = require('../controller/auth');



// @desc    get verify email Page
// @route   Get /localhost:3000/signup/verify/step1
// @access  Public
router.get(`/signup/verify/step1`, isAuth, verify.getVerifyPage);




// @desc    post email to verify your account
// @route   Get /localhost:3000/signup/verify/step2
// @access  Public
router.post(`/signup/verify/step2`, isAuth, verify.postEmail);




// @desc    get code Page
// @route   Get /localhost:3000/signup/verify/step2
// @access  Public
router.get(`/signup/verify/step2`, isAuth, verify.getCodePage);




// @desc    Send code;
// @route   Get /localhost:3000/
// @access  Public
router.post(`/log`, isAuth, verify.verifyCode);


module.exports = router;