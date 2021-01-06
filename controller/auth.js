// Required Modules;
const userSchema = require('../model/user');

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
    const userInfo = await userSchema.User
    .findOne({_id: `5fd4b5f7fd2091194f054694`})
    .select({email: 1, password: 1, _id: 1});
    if (req.body.email === userInfo.email && req.body.password === userInfo.password) {
      req.session.isLoggedIn = true;
      req.session.email = userInfo.email;
      req.session._id = userInfo._id;
      res.status(300).redirect(`/all-products`);
    }
    else {
      console.log(`Error: The password or email is incorrect`);
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
    req.session.isLoggedIn = false;
    res.status(300).redirect(`/`);
  } 
  catch (error) {
    console.log(error.message);
  }
}