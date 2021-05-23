const express = require("express");
const app = express();
const productRouter = require("./routes/products");
const cors = require("cors");
require("dotenv").config();

const connectDb = require("./config/db");
connectDb();
const PORT = process.env.PORT;
app.use(express.static(__dirname + "/public"));

app.use(cors());

app.use(express.json());

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log("Backend is running on port" + PORT);
});
