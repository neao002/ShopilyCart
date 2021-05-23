import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Css/update.css";

import axios from "axios";
import { useHistory, useRouteMatch } from "react-router";

function Update() {
  const history = useHistory();
  const match = useRouteMatch();

  const [updateItem, setUpdateItem] = useState({
    productName: "",
    price: "",
    descripcion: " ",
  });
  const updateGroceryItem = async (event) => {
    event.preventDefault();
    const jsonUpdateItem = JSON.stringify(updateItem);
    const config = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "Token",
        "Access-Control-Allow-Origin": "*",
      },
    };
    await axios
      .post(
        `http://localhost:5000/products/updatedshop/${match.params.id}`,
        jsonUpdateItem,
        config
      )
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }
      })
      .catch((err) => console.log("Error:", err));
    setUpdateItem({
      productName: "",
      price: "",
      descripcion: " ",
    });

    history.push("/add_Products");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/update/${match.params.id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateItem(response.data);
      });
  }, []);
  console.log(updateItem);
  return (
    <div className="update-image mt-5">
      <Form className="formUpdate mt-5" onSubmit={updateGroceryItem}>
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            value={updateItem.productName}
            name="productName"
            type="text"
            placeholder="What is your product name?"
            onChange={(e) =>
              setUpdateItem({ ...updateItem, productName: e.target.value })
            }
          />
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={updateItem.price}
            name="price"
            type="text"
            placeholder="What is the price of your product??"
            onChange={(e) =>
              setUpdateItem({ ...updateItem, price: e.target.value })
            }
          />
          <Form.Label>Describe your product</Form.Label>
          <Form.Control
            value={updateItem.descripcion}
            name="descripcion"
            type="text"
            placeholder="Please Describe the Product?"
            onChange={(e) =>
              setUpdateItem({ ...updateItem, descripcion: e.target.value })
            }
          />
        </Form.Group>

        <Button
          className=" mt-2 ml-4 ButtonAddUpdate"
          variant="warning"
          type="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
