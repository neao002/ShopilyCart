const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();

const connectDb = require("./config/db");
connectDb();
const PORT = process.env.PORT;
app.use(express.static(__dirname + "/public"));

app.use(cors());

app.use(express.json());

const session = require("express-session");

app.use(
  session({
    secret: "My Password",
    cookie: {
      maxAge: 900 * 60 * 10,
    },
  })
);

app.post("/products", (req, res) => {});
app.post("/", (req, res) => {});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(PORT, () => {
  console.log("Backend is running on por" + PORT);
});
