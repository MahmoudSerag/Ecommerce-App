// required modules;
const productSchema = require('../model/product');

// @desc    get-product-form
// @route   Get /localhost:3000/add-product
// @access  Public
exports.getProductPage = async (req, res) => {
  res.status(201).render(`users/add-product`);
}

// @desc    From add-product page to all-product page
// @route   Get /localhost:3000/all-product
// @access  Public
exports.addProduct = async (req, res) => {
  try {
      const product = productSchema.Product({
      name: req.body.productName,
      price: req.body.price,
      rate: req.body.rate,
      
    });
    await product.save();
    res.status(300).redirect(`/all-products`);
  } 
  catch (error) {
    console.log(error.message);
  }
}