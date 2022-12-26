import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductContext } from "./HttpAppDemo";

const Product = ({ id, brand, price, model, desc }) => {
  const { deleteProduct } = useContext(ProductContext);
  return (
    <div
      style={{
        border: "1px solid black",
        margin: 5,
        padding: 5,
        width: 200,
        height: 260,
        backgroundColor: "cyan",
        color: "blue",
      }}
    >
      <h4>ID:{id}</h4>
      <h3>Brand:{brand}</h3>
      <h5>Price:{price}</h5>
      <h5>Model:{model}</h5>
      <h5>Desc:{desc}</h5>
      <IconButton color="error" onClick={() => deleteProduct(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Product;
