import React, { useState } from "react";
import AddProduct from "./AddProduct";
import Divider from "@mui/material/Divider";
import ListProducts from "./ListProduct";
const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const getProduct = (product) => {
    if (product) setProducts([...products, product]);
  };
  return (
    <>
      <h2>Product Listing</h2>
      <AddProduct getProduct={getProduct} />
      <Divider />
      <ListProducts products={products} />
    </>
  );
};

export default ProductListing;
