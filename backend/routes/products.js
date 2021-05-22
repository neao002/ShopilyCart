const router = require("express").Router();
const Product = require("../models/products");

const multer = require("multer");

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
    name: req.body.name,
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

// updating my products

// router.put("/update/:id", async (req, res) => {
//   const { name, price, descripcion } = req.body;
//   await Product.findByIdAndUpdate(req.params.id, {
//     name,
//     price,
//     descripcion,
//     producPic: "/images/" + req.file.filename,
//   });
// });

router.put("/update", async (req, res) => {
  const newProductName = req.body.newProductName;
  const id = req.body.id;
  await Product.findById(id, (err, updatedProduct) => {
    updatedProduct.name = newProductName;

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
