const router = require("express").Router();
const Product = require("../models/products");

const multer = require("multer");

// config for my picture

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "public/images");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

// ading new product but also a picture

router.post("/add", upload.single("producPic"), (req, res) => {
  console.log(req.body, req.file);
  const newProduct = new Product({
    productName: req.body.productName,
    price: req.body.price,
    descripcion: req.body.descripcion,
    producPic: "/images/" + req.file.filename,
  });
  newProduct.save((err, doc) => {
    res.json("A new product has been added!");
  });
});

router.get("/add", (req, res) => {
  Product.find((err, docs) => {
    res.json(docs);
  });
});

// updating data

router.put("/update", async (req, res) => {
  const newProductName = req.body.newProductName;
  const newPrice = req.body.newPrice;
  const newDescription = req.body.newDescription;
  const id = req.body.id;
  await Product.findById(id, (err, updatedProduct) => {
    updatedProduct.name = newProductName;
    updatedProduct.price = newPrice;
    updatedProduct.descripcion = newDescription;

    updatedProduct.save();
    res.send("updated");
  });
  try {
  } catch (error) {
    console.log(err);
  }
});

// getting rid of you =)
router.get("/delete/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, doc) => {
    res.json("One product from the data has been deleted!");
  });
});

module.exports = router;
