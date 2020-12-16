// required modules
const mongoose = require('mongoose');

// Create user schema;
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 3,
    maxlength: 15,
    required: true
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 15,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  myCart: [
    {
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
    productId: {
      type: mongoose.Types.ObjectId,
      ref: `product`
    },
    _id: false
  }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;