import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./Data";
const ProductDetails = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const products = Object.values(data).flat(2);
    const prod = products?.find((pro) => pro.id == pid);
    if (prod) setProduct({ ...prod });
  }, [pid]);
  const { id, model, brand, price, image, desc } = product;
  return (
    <>
      <h2>Product Deatails</h2>
      <img src={image} />
      <h3>Brand:{brand}</h3>
      <h3>Model:{model}</h3>
      <h3>price:{price}</h3>
      <h3>{desc}</h3>
    </>
  );
};

export default ProductDetails;
