// Requirement moudles;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const connectDB = require('./config/db');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const addproduct = require('./routes/add-product');
const allProducts = require('./routes/all-products');
const myCart1 = require('./routes/my-cart');
const user = require('./routes/user');
const myCart2 = require('./routes/my-cart');
const login = require('./routes/auth');
const verify = require('./routes/verify-email');
const error = require('./routes/404');

const store = new MongoDBStore({
  uri: `mongodb://localhost/Ecommerce-App`,
  collection: `session`
});

// connect to DB;
connectDB();

// Set engine which will be used;
app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `view`));

// Set tha path which will use to references css, images and js files;
app.use(express.static(path.join(__dirname, `public`)));

// Session & cookies setup;
app.use(session({
  secret: `My Secret Key Is FUCKEEN H@@RD Dude:)`,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  },
  store: store}));

  //Read json files;
app.use(express.json());

// Import body-parser for read printing on the console;
app.use(bodyParser.urlencoded({extended: true}));

// Import custom modules;
app.use(addproduct);
app.use(allProducts);
app.use(myCart1);
app.use(user);
app.use(myCart2);
app.use(login);
app.use(verify);
app.use(error);

// Conncet to localhost at port 3000;
const port = process.env.port || 3000;
app.listen(port, console.log(`Listening to port ${port}...`));