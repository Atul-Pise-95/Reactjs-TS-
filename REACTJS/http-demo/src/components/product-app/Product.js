import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductContext } from "./ProductApp";
const Product = ({ id, model, brand, desc, price }) => {
  const { deleteProduct } = useContext(ProductContext);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: 5,
        margin: 5,
        width: 200,
        backgroundColor: "hotpink",
      }}
    >
      <h3>
        {id}-{model}
      </h3>
      <h4>Brand:{brand}</h4>
      <h4>Price:{price}</h4>
      <h4>{desc}</h4>
      <IconButton color="error" onClick={() => deleteProduct(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Product;
