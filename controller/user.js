// Required Modules
const userSchema = require('../model/user');
const bcrypt = require('bcryptjs');

// @desc    get user Page
// @route   Get /localhost:3000/user
// @access  Public
exports.getUserPage = async (req, res) => {
  res.status(200).render(`users/user`);
}

// @desc    get add-product Page
// @route   Get /localhost:3000/add-product
// @access  Public
exports.postUser = async (req, res) => {
  try {
    const existEmail = await userSchema.User.findOne({email: req.body.email});
    console.log(existEmail);
    if (existEmail) {
      res.status(300).redirect(`/signup`);
    }
    else {
      const hashedPaswword = await bcrypt.hash(req.body.password, 12);
      const user = userSchema.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPaswword,
        age: req.body.age,
      });
      await user.save();
      res.status(300).redirect(`/signup/verify/step1`);
    }
  } 
  catch (error) {
    console.log(error.message);
  }
}