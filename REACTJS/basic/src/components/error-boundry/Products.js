import React from "react";
const Product = ({ id, model, brand, price }) => {
  if (!price) throw new Error("price is required");
  return (
    <div
      style={{
        width: 250,
        padding: 15,
        border: "1px solid #888",
        borderRadius: 5,
        margin: 10,
      }}
    >
      <h3>ID: {id}</h3>
      <h3>Model: {model}</h3>
      <h3>Brand: {brand}</h3>
      <h3>Price: {price}</h3>
    </div>
  );
};

export default Product;
