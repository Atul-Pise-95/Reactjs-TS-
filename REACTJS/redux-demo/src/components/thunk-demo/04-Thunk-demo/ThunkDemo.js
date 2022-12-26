import React from "react";
import EmployeeList from "./EmployeeList";
import PostList from "./PostList";
import ProductList from "./ProductList";
const ThunkDemo = () => {
  return (
    <>
      <h2>Thunk Demo</h2>
      <hr />
      <ProductList />
      <hr />
      <EmployeeList />
      <hr />
      <PostList />
    </>
  );
};

export default ThunkDemo;
