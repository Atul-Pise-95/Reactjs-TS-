import React from "react";
import Product from "./Product";
const ProductList = ({ val }) => {
  return (
    <div
      style={{
        backgroundColor: "orange",
        display: "flex",
        flexWrap: "wrap",
        minHeight: "75vh",
        padding: 10,
      }}
    >
      {Array.isArray(val) && val.map((m, i) => <Product key={m.id} {...m} />)}
    </div>
  );
};

export default ProductList;
