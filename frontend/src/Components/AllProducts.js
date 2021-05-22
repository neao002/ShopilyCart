import { Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function All_plant() {
  const [product, setProduct] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/products/add").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, [deleteMsg]);

  const updatingProduct = (id) => {
    axios.get("/products/update/" + id).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <Row>
      <h1>My Grocery</h1>

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
            <div class="form-group">
              <label>Product Name:</label>
              <input
                type="name"
                name="name"
                class="form-control"
                placeholder={item.name}
              />
            </div>
            <div class="form-group">
              <label>Price</label>
              <input
                name="price"
                type="email"
                class="form-control"
                placeholder={item.price}
              ></input>
            </div>
            <div class="form-group">
              <label>Description</label>
              <input
                name="descripcion"
                type="text"
                class="form-control"
                placeholder={item.descripcion}
              ></input>
            </div>
            <button type="button" onClick={() => updatingProduct(item._id)}>
              Update
            </button>
          </Col>
        );
      })}
    </Row>
  );
}

export default All_plant;
