import { Row, Col, Form, Button, Alert, Card, CardDeck } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Css/Products.css";

function Addnewproduct({ updating }) {
  const [data, setName] = useState({
    importance: 1,
    productName: "",
    price: "",
    descripcion: "",
  });

  const [product, setProduct] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState();

  // appending and sending data to back-end

  const addGrocery = (event) => {
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
      const product = response.data;
      product.sort((a, b) => {
        const product = a.importance;
        const productB = b.importance;
        let comparison = 0;
        if (product > productB) {
          comparison = 1;
        } else if (product < productB) {
          comparison = -1;
        }
        return comparison;
      });
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

  return (
    <div className="container-new-product rgba-stylish-strong py-5 px-5 z-depth-4">
      <Col className="product-image">
        <h1 className="white-text font-weight-bold">Add New Product</h1>
        <Form className="formProduct" onSubmit={addGrocery}>
          <Form.Group>
            <Form.Label>Importancy</Form.Label>
            <Form.Control
              as="select"
              name="importance"
              defaultValue="1 - Very Much Important"
              onChange={(e) => setName({ ...data, importance: e.target.value })}
            >
              <option value="1">1 - Very Much Important</option>
              <option value="2">2 - Very Important</option>
              <option value="3">3 - Important</option>
              <option value="4">4 - Not Important</option>
              <option value="5">5 - Not Important At All</option>
            </Form.Control>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              name="productName"
              type="text"
              placeholder="What is ur product?Potatoes, lemons, etc?"
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
      {deleteMsg != null && (
        <Alert className="w-50" variant="dark ml-5 mt-5">
          {deleteMsg}
        </Alert>
      )}
      <h1 className="mt-5 mb-5">My Products</h1>
      <div className="container-fluid d-flex">
        {product.map((item) => {
          return (
            <div className=" ">
              <Card
                className=" m-1 bg-success text-center"
                style={{ width: "18rem" }}
              >
                <Card.Body className="ml-1">
                  <Card.Title>
                    <h3 className="text-white">Product Name:</h3>
                    <h4>{item.productName}</h4>
                  </Card.Title>
                  <Card.Title>
                    <h3 className="text-white">Price</h3>
                    <Card.Text>{item.price}$</Card.Text>
                  </Card.Title>
                  <Card.Title>
                    <h3 className="text-white">Description:</h3>
                    <Card.Text>{item.descripcion}</Card.Text>
                  </Card.Title>
                </Card.Body>

                <Button className="buttonUpdate btn btn-warning">
                  <Link to={`/update/${item._id}`}>Update</Link>
                </Button>

                <Button type="button" onClick={() => deleteProduct(item._id)}>
                  Delete
                </Button>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Addnewproduct;
