import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <h6 style={{ color: "red" }}>Page Not Found...</h6>
      <Link to="">Go To Home Page</Link>
    </>
  );
};

export default PageNotFound;
