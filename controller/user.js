const userSchema = require('../model/user');


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
  const user = userSchema.User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
  });
  const result = await user.save();
  console.log(result);
  res.status(300).redirect(`/add-product`);
}