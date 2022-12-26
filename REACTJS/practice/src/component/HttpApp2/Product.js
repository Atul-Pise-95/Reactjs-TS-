import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext } from "react";
import { ProductContext } from "./HttpApp2";
const Product = ({ id, model, brand, price, desc }) => {
  const { deleteProduct } = useContext(ProductContext);
  return (
    <div
      style={{
        border: "1px solid black",
        width: 200,
        height: 270,
        padding: 5,
        margin: 5,
      }}
    >
      <h3>Id:{id}</h3>
      <h5>Model:{model}</h5>
      <h5>Brand:{brand}</h5>
      <h4>Price:{price}</h4>
      <h5>Desc:{desc}</h5>
      <IconButton color="error" onClick={() => deleteProduct(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Product;
