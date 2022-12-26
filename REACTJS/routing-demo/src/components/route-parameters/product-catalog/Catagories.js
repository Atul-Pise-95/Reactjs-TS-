import React from "react";
import { Link } from "react-router-dom";
import products from "./Data";
const Catagories = () => {
  return (
    <>
      <h2>Catagories</h2>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        {Object.keys(products).map((Catagory, i) => (
          <Link
            key={Catagory + i}
            to={`/${Catagory}`}
            style={{ textTransform: "capitalize" }}
          >
            {Catagory}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Catagories;
