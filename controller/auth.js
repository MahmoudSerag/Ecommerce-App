// Required Modules;
const userSchema = require('../model/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transport = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}));

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


// @desc    get verify email Page
// @route   Get /localhost:3000/signup/verify/step1
// @access  Public
exports.getVerifyPage = async (req, res) => {
  try {
    res.status(200).render(`users/verify-password`);
  }
  catch (error) {
    console.log(error.message);
  }
}





// @desc    post email to verify your account
// @route   Get /localhost:3000/signup/verify/step2
// @access  Public
exports.postEmail = async (req, res) => {
  try {
    const email = req.body.email;
    const userEmail = await userSchema.User.findOne({email: email});
    if (!userEmail) {
      return res.status(300).redirect(`/signup/verify/step1`);
    }
    const code = Math.floor(Math.random() * (000000, 999999)) + 1;
    await transport.sendMail({
      to: email,
      from: 'mahmoudsrag16@gmail.com',
      subject: 'Verify Code',
      html: `<h1> Code: ${code} </h1>`
    });
    req.session.code = code;
    res.status(300).redirect(`/signup/verify/step2`);
  }
  catch (error) {
    console.log(error.message);
  }
}


// @desc    get code Page
// @route   Get /localhost:3000/signup/verify/step2
// @access  Public
exports.getCodePage = async (req, res) => {
  try {
    res.status(200).render(`users/code-review`);
  }
  catch (error) {
    console.log(error.message);
  }
}



// @desc    Send code;
// @route   Get /localhost:3000/
// @access  Public
exports.verifyCode = async (req, res) => {
  try {
    if (req.body.code == req.session.code) {
      req.session.code = null;
      return res.status(300).redirect(`/`);
    }
    res.status(300).redirect(`signup/verify/step2`);
  }
  catch (error) {
    console.log(error.message);
  }
}