import { Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
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

  const deleteProduct = (id) => {
    axios.get("/products/delete/" + id).then((response) => {
      setDeleteMsg(response.data);
      console.log(response.data);
    });
  };

  const updateProduct = (id) => {
    axios.get("/products/update/" + id).then((response) => {
      console.log(response);
    });
  };

  return (
    <Row>
      <h1>My Grocery</h1>
      {deleteMsg != null && <Alert variant="success">{deleteMsg}</Alert>}
      {product.map((item) => {
        return (
          <Col key={item._id}>
            <h3>Product Name: {item.name}</h3>
            <h3>Price {item.price}$</h3>
            <h3>Description : {item.descripcion}</h3>
            <img src={`http://localhost:5000/${item.producPic}`} />
            <button type="button" onClick={() => deleteProduct(item._id)}>
              Delete
            </button>
            <button type="button" onClick={() => updateProduct(item._id)}>
              Update
            </button>
          </Col>
        );
      })}
    </Row>
  );
}

export default All_plant;
