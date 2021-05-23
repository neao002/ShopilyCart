const router = require("express").Router();
const Product = require("../models/products");

// ading new product

router.post("/add", (req, res) => {
  const newProduct = new Product({
    importante: req.body.importance,
    productName: req.body.productName,
    price: req.body.price,
    descripcion: req.body.descripcion,
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

router.get("/update/:id", (req, res) => {
  const updateId = req.params.id;
  Product.findById(updateId, (err, shopItem) => {
    res.json(shopItem);
  });
});

router.post("/updatedshop/:id", (req, res) => {
  const updateId = req.params.id;
  Product.findByIdAndUpdate(
    updateId,
    {
      productName: req.body.productName,
      price: req.body.price,
      descripcion: req.body.descripcion,
      importance: req.body.importance,
    },
    (err, updatedItem) => {
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).send("Item not found");
      }
    }
  );
});

// getting rid of you =)
router.get("/delete/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, doc) => {
    res.json("One product from the data has been deleted!");
  });
});

module.exports = router;
