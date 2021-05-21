const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogIn = new Schema({
  name: String,
  price: Number,
  descripcion: String,
  my_picture: String,
});

const UserLogIn = mongoose.model("UserLogin", LogIn);

module.exports = UserLogIn;
