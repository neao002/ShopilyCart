import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Css/AllProducts.css";

function All_plant() {
  const [product, setProduct] = useState([]);
  const [newProductName, setProductName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/products/add").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, []);

  const updateFood = (e, id) => {
    axios.put("http://localhost:5000/products/update", {
      id: id,
      newProductName: newProductName,
      newPrice: newPrice,
      newDescription: newDescription,
    });
  };

  const deleteProduct = (id) => {
    axios.get("/products/delete/" + id).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <Row className="container-allproducts allproducts-image">
      <h1>My Grocery</h1>

      {product.map((item) => {
        return (
          <Card key={item._id} style={{ width: "18rem" }}>
            {/* <Card.Img
              variant="top"
              src={`http://localhost:5000/${item.producPic}`}
            /> */}
            <Card.Body>
              <Card.Title>
                <h3>Product Name:</h3>
                {item.productName}
                <input
                  name="productName"
                  type="text"
                  placeholder="New Product Name"
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />
              </Card.Title>
              <h3>Price</h3>
              {item.price}
              <input
                name="price"
                type="text"
                placeholder="Fix your Price"
                onChange={(e) => {
                  setNewPrice(e.target.value);
                }}
              />
              <h3>Description:</h3>
              {item.descripcion}
              <input
                name="descripcion"
                type="text"
                placeholder="Fix your description"
                onChange={(e) => {
                  setNewDescription(e.target.value);
                }}
              />
            </Card.Body>

            <button type="button" onClick={() => updateFood(item._id)}>
              Update
            </button>

            <button type="button" onClick={() => deleteProduct(item._id)}>
              Delete
            </button>
          </Card>
        );
      })}
    </Row>
  );
}

export default All_plant;
