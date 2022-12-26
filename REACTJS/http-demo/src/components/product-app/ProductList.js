import React from "react";
import Product from "./Product";
const ProduuctList = ({ products }) => {
  return (
    <div
      style={{
        backgroundColor: "chartreuse",
        padding: 20,
        minHeight: "72vh",
      }}
    >
      <h2>Product List</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(products) &&
          products.map((value, i) => <Product key={value.id} {...value} />)}
      </section>
    </div>
  );
};

export default ProduuctList;
