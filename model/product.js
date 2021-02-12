// required modules;
const mongoose = require('mongoose');

// create product schema;
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 15,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    max: 100,
    required: true
  },
  userID: {
    type: mongoose.Types.ObjectId,
    ref: `user`,
    required: false
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;