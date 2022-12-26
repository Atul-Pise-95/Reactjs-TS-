import React from "react";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
const RoutingHttp = () => {
  return (
    <>
      <h2>RoutingHttp</h2>
      <Routes>
        <Route path="" element={<UserList />} />
        <Route path=":id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default RoutingHttp;
