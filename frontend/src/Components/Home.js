import React from "react";
import "./Css/Home.css";
function Products() {
  return (
    <div className="mt-5 container-home home-form">
      <img
        className="imgHome"
        src="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
      <div className="centered mb-5 ">
        <div className="mb-5  text-light" id="div1">
          Welcome To GrocyShop
        </div>
      </div>
    </div>
  );
}

export default Products;
