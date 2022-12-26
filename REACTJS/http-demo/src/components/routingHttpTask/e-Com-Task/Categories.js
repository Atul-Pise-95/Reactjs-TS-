import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/categories`)
      .then((response) => {
        setCategory(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h2>Categories</h2>

      <nav style={{ display: "flex", flexDirection: "column" }}>
        {category.map((category, i) => (
          <Link
            key={category + i}
            to={`/${category}`}
            style={{ textTransform: "capitalize", textDecoration: "none" }}
          >
            {category}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Categories;
