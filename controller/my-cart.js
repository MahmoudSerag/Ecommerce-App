const productSchema = require('../model/product');
const userSchema = require('../model/user');


// @desc    get my-cart Page
// @route   Get /localhost:3000/my-cart
// @access  Public
exports.getmyCart = async (req, res) => {
  try {
   const userCarts = await userSchema.User
   .findOne({_id: req.session.userInfo._id})
   .select({myCart: 1, _id: 1});
   if (!userCarts) return res.render('404');
    res.status(201).render(`users/my-cart`, {
      userProducts: userCarts
    });
  }
  catch (error) {
    console.log(error.message);
  }
}

// @desc    redirect to my-cart Page
// @route   Get /localhost:3000/my-cart
// @access  Public
exports.deleteCart = async (req, res) => {
  try {
    const user = await userSchema.User.findOne({_id: req.session.userInfo._id});

    for (let i = 0; i < user.myCart.length; i++) {
      if (req.body.productId == user.myCart[i].productId) {
        user.myCart.splice(i, 1);
        break;
      }
    }
    await user.save();
    res.status(300).redirect(`/my-cart`);
  } catch (error) {
    console.log(error.message);
  }
}

// @desc    get details Page
// @route   Get /localhost:3000/my-cart/details
// @access  Public
exports.sendDetails = async (req, res) => {
  try {
    const product = await productSchema.Product
    .findOne({_id: req.body.productID})
    .select({name: 1, price: 1, rate: 1});
    res.status(200).render(`users/send-details`, {
      productDetails: product
    });
  }
  catch (error) {
    console.log(error.message);
  }
}