import React from "react";
import { Link } from "react-router-dom";
const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div
      style={{
        width: 300,
        padding: 5,
        margin: 5,
        border: "1px solid black",
        backgroundColor: "#ddd",
      }}
    >
      <img src={image} style={{ width: 100, height: 100 }} />
      <Link to={`/details/${id}`}>
        <h4>{id}</h4>
      </Link>
      <h4>Title:{title}</h4>
      <h4>Price:{price}</h4>
      <h4>Desc:{description}</h4>
      <h4>Category:{category}</h4>
      <h4>
        Rating:{rating.rate} count:- {rating.count}
      </h4>
    </div>
  );
};

export default Product;
