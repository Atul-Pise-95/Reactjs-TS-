import React from "react";
import { Link } from "react-router-dom";
const Product = ({ id, model, brand, price, image, desc }) => {
  return (
    <div
      style={{
        width: 220,
        border: "1px solid #888",
        borderRadious: 5,
        padding: 5,
        margin: 5,
        backgroundColor: "#fff",
      }}
    >
      <figure>
        <img src={image} style={{ width: "100%", height: 100 }} />
      </figure>
      <h4>
        <Link to={`/details/${id}`}>{model}</Link>
      </h4>
      <h3>{brand}</h3>
      <h4>Price:{price}</h4>
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
