import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const {
    id: id1,
    title,
    price,
    description,
    category,
    image,
    rating,
  } = product;
  return (
    <>
      <h2>Product Details</h2>
      <Link to="/">Back to Products</Link>
      <br />
      <img src={image} style={{ width: 200, height: 200 }} />
      <h4> id:{id1}</h4>
      <h4> Title:{title}</h4>
      <h4>Price:{price}</h4>
      <h4>Price:{price}</h4>
      <h4>Desc:{description}</h4>
      <h4>Category:{category}</h4>
      <h4>
        Rating:{rating?.rate} Count:-{rating?.count}
      </h4>
    </>
  );
};

export default ProductDetails;
