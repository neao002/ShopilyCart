const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const login = new Schema({
  importance: Number,
  productName: String,
  price: String,
  descripcion: String,
});

const Product = mongoose.model("Product", login);

module.exports = Product;
