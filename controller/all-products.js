const productSchema = require('../model/product');
const userSchema = require('../model/user');

// @desc    get all-product Page
// @route   Get /localhost:3000/all-products
// @access  Public
exports.getAllProducts = async (req, res) => {
  try {
    const product = await productSchema.Product
    .find()
    .select({name: 1, price: 1, rate: 1, productID: 1});
    res.status(201).render('users/all-products', {
      product: product
    });
  }
  catch (error) {
    console.log(error.message);
  }
}

// @desc    get my-cart Page
// @route   Get /localhost:3000/my-cart
// @access  Public
exports.postToMyCart = async (req, res) => {
  try {
    const product = await productSchema.Product.findById(req.body.productID);
    if (!product) return res.status(404).render(`404`);
    
    const user = await userSchema.User.findOne({_id: req.session.userInfo._id});
    if (!user) return res.status(404).render(`404`);

    if (user.myCart.length > 0) {
      for (let i = 0; i < user.myCart.length; i++) {
        if (req.body.productID.toString() === user.myCart[i].productId.toString()) {
          user.myCart.splice(i, 1);
        }
      };
    }
    user.myCart.push(
      {
        name: product.name,
        rate: product.rate,
        price: product.price,
        productId: product._id
      }
    );
    

    await user.save();
    res.status(300).redirect(`/my-cart`);
  }
  catch (error) {
    console.log(error.message);
  }
}