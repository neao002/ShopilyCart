const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const login = new Schema({
  productName: String,
  price: String,
  descripcion: String,
  producPic: String,
  importance: String,
});

const Product = mongoose.model("Product", login);

module.exports = Product;
