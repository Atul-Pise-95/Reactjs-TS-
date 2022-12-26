import React from "react";
const Product = ({ state }) => {
  return (
    <div style={{ border: "1px solid black", padding: 5, margin: 5 }}>
      <img src={state.image} />
      <h2>ID:{state.id}</h2>
      <h4>Tilte:{state.title}</h4>
      <h4>Price:{state.price}</h4>
      <h4>Desc:{state.description}</h4>
      <h4>Catagory:{state.category}</h4>
      <h4>Rating:{state.rating}</h4>
    </div>
  );
};

export default Product;
