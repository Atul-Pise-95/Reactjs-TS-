import React from "react";
import Product from "./Product";
const ProductList = ({ list }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "orange",
        padding: 10,
        minHeight: "76vh",
      }}
    >
      {Array.isArray(list) &&
        list.map((m, i) => <Product key={m + i} {...m} />)}
    </div>
  );
};

export default ProductList;
