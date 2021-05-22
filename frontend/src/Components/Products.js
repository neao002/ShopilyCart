import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function Add_new() {
  const [data, setName] = useState({
    name: "",
    price: "",
    descripcion: " ",
  });
  const [picture, setPicture] = useState();
  const [product, setProduct] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState();

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

  const getPic = (event) => {
    setPicture(event.target.files[0]);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/products/add").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, [deleteMsg]);

  const deleteProduct = (id) => {
    axios.get("/products/delete/" + id).then((response) => {
      setDeleteMsg(response.data);
      console.log(response.data);
    });
  };

  return (
    <Row>
      <Col>
        <h1>Add New Product</h1>
        <Form onSubmit={add}>
          <Form.Group controlId="plantName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="What is your product name?"
              onChange={(e) => setName({ ...data, name: e.target.value })}
            />
            <Form.Control
              name="price"
              type="text"
              placeholder="What is the price of your product??"
              onChange={(e) => setName({ ...data, price: e.target.value })}
            />
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
              id="exampleFormControlFile1"
              label="Upload a Picture"
              onChange={getPic}
              name="producPic"
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Add to Shop
          </Button>
        </Form>
      </Col>

      <h1>My Products</h1>
      {deleteMsg != null && <Alert variant="success">{deleteMsg}</Alert>}
      {product.map((item) => {
        return (
          <Col key={item._id}>
            <h3>Product Name: {item.name}</h3>
            <h3>Price {item.price}$</h3>
            <h3>Description : {item.descripcion}</h3>
            <img
              className="w-50"
              src={`http://localhost:5000/${item.producPic}`}
            />
            <button type="button" onClick={() => deleteProduct(item._id)}>
              Delete
            </button>
            <button type="button">Update</button>
          </Col>
        );
      })}
      {/* <Col>
        <h3>Product Name: </h3>
        <h3>Price </h3>
        <h3>Description </h3>
        <img className="w-50" src={``} />
        <button>Update</button>
      </Col> */}
    </Row>
  );
}

export default Add_new;
