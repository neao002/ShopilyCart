import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Add_new() {
  const [data, setName] = useState({
    name: "",
    price: "",
    descripcion: " ",
  });
  const [picture, setPicture] = useState();

  const add = (event) => {
    event.preventDefault();
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
    </Row>
  );
}

export default Add_new;
