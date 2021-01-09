// Required Modules;
const userSchema = require('../model/user');
const bcrypt = require('bcryptjs');
const e = require('express');

// @desc    get login Page
// @route   Get /localhost:3000/login
// @access  Public
exports.getloginPage = async (req, res) => {
  if (req.session.isLoggedIn) {
    res.status(300).redirect(`/all-products`);
  }
  else {
    res.status(200).render(`users/login`);
  }
}


// @desc    get all-products Page
// @route   Get /localhost:3000/all-products
// @access  Public
exports.postLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userInfo = await userSchema.User
    .findOne({email: email})
    .select({email: 1, password: 1, _id: 1});
    if (!userInfo) {
      res.status(300).redirect(`/`);
    }
    else {
      const comparePassword = await bcrypt.compare(password, userInfo.password);
      if (comparePassword) {
        req.session.isLoggedIn = true;
        req.session.userInfo = userInfo;
        res.status(300).redirect(`/all-products`);
      }
      else {
        res.status(300).redirect(`/`);
      }
    }
  }
  catch (error) {
    console.log(`${error.message}`);
  }
}

// @desc    get login Page
// @route   Get /localhost:3000/login
// @access  Public
exports.postLogout = async (req, res) => {
  try {
    await req.session.destroy();
    res.status(300).redirect(`/`);
  } 
  catch (error) {
    console.log(error.message);
  }
}