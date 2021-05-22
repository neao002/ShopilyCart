import { Row, Col, Form, Button, Alert, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Css/Products.css";

function Add_new() {
  const [data, setName] = useState({
    name: "",
    price: "",
    descripcion: " ",
  });
  const [picture, setPicture] = useState();
  const [product, setProduct] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState();
  const [newProductName, setProductName] = useState([]);

  // appending and sending data to back-end

  const add = (event) => {
    // event.preventDefault();
    const getProduct = new FormData();
    getProduct.append("name", data.name);
    getProduct.append("price", data.price);
    getProduct.append("descripcion", data.descripcion);

    getProduct.append("producPic", picture);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:5000/products/add", getProduct, config)
      .then((response) => {
        console.log(response.data);
      });
  };

  // geting mypic

  const getPic = (event) => {
    setPicture(event.target.files[0]);
  };

  // getting and fetching my data

  useEffect(() => {
    axios.get("http://localhost:5000/products/add").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, [deleteMsg]);

  // deleting my product from data base and browser

  const deleteProduct = (id) => {
    axios.get("/products/delete/" + id).then((response) => {
      setDeleteMsg(response.data);
      console.log(response.data);
    });
  };

  // updating product

  const updateFood = (id) => {
    axios.put("http://localhost:5000/products/update", {
      id: id,
      newProductName: newProductName,
    });
  };

  return (
    <Row className=" rgba-stylish-strong py-5 px-5 z-depth-4">
      <Col className="product-image">
        <h1 className="white-text font-weight-bold">Add New Product</h1>
        <Form onSubmit={add}>
          <Form.Group className="formProduct" controlId="plantName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="What is your product name?"
              onChange={(e) => setName({ ...data, name: e.target.value })}
            />
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="text"
              placeholder="What is the price of your product??"
              onChange={(e) => setName({ ...data, price: e.target.value })}
            />
            <Form.Label>Describe your product</Form.Label>
            <Form.Control
              name="descripcion"
              type="text"
              placeholder="Please Describe the Product?"
              onChange={(e) =>
                setName({ ...data, descripcion: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              className="inputAddPicture"
              id="exampleFormControlFile1"
              label="Upload a Picture"
              onChange={getPic}
              name="producPic"
            />
          </Form.Group>
          <Button
            className="mt-2 ml-4 ButtonAddShop"
            variant="success"
            type="submit"
          >
            Add to Shop
          </Button>
        </Form>
      </Col>
      {deleteMsg != null && <Alert variant="success">{deleteMsg}</Alert>}
      <h1>My Products</h1>
      {product.map((item) => {
        return (
          <Col key={item._id}>
            <h3>Product Name: {item.name}</h3>
            <input
              name="name"
              type="text"
              placeholder="New Product Name"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            <h3>Price {item.price}$</h3>
            <input
              name="price"
              type="text"
              placeholder="Fix your Price"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            <h3>Description : {item.descripcion}</h3>
            <input
              name="name"
              type="text"
              placeholder="Fix your description"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            <img
              className="w-50"
              src={`http://localhost:5000/${item.producPic}`}
            />
            <button type="button" onClick={() => updateFood(item._id)}>
              Update
            </button>
            <button type="button" onClick={() => deleteProduct(item._id)}>
              Delete
            </button>
          </Col>
        );
      })}
    </Row>
  );
}

export default Add_new;
