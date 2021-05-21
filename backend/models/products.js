const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogIn = new Schema({
  name: String,
  price: Number,
  descripcion: String,
  producPic: String,
});

const Product = mongoose.model("Product", LogIn);

module.exports = Product;
