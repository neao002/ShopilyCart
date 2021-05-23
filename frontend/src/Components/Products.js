import { Row, Col, Form, Button, Alert, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Css/Products.css";

function Add_new({ updating }) {
  const [data, setName] = useState({
    productName: "",
    price: "",
    descripcion: " ",
  });

  const [product, setProduct] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState();

  // appending and sending data to back-end

  const add = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data);
    console.log(data);
    const config = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "Token",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post("http://localhost:5000/products/add", jsonData, config)
      .then((response) => {
        console.log(response.data);
        updating();
      });
  };

  // getting and fetching my data

  useEffect(() => {
    axios.get("http://localhost:5000/products/add").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, [updating]);

  // deleting my product from data base and browser

  const deleteProduct = (id) => {
    axios.get("/products/delete/" + id).then((response) => {
      setDeleteMsg(response.data);
      console.log(response.data);
      updating();
    });
  };

  // updating product

  return (
    <Row className=" rgba-stylish-strong py-5 px-5 z-depth-4">
      <Col className="product-image">
        <h1 className="white-text font-weight-bold">Add New Product</h1>
        <Form className="formProduct" onSubmit={add}>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              name="productName"
              type="text"
              placeholder="What is your product name?"
              onChange={(e) =>
                setName({ ...data, productName: e.target.value })
              }
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
      <h1 className="mt-5">My Products</h1>
      {product.map((item) => {
        return (
          <Card className="mx-3" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <h3>Product Name:</h3>
                <h4>{item.productName}</h4>
              </Card.Title>
              <h3>Price</h3>
              <Card.Text>{item.price}$</Card.Text>
              <h3>Description:</h3>
              <Card.Text>{item.descripcion}</Card.Text>
            </Card.Body>

            <button className="btn btn-warning">
              <Link to={`/update/${item._id}`}>Update</Link>
            </button>

            <Button type="button" onClick={() => deleteProduct(item._id)}>
              Delete
            </Button>
          </Card>
        );
      })}
    </Row>
  );
}

export default Add_new;
