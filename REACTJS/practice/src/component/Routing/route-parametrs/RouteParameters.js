import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
const RouteParameters = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <UserList />
      <Routes>
        <Route path="" element={<Navigate to="/all" />} />
        <Route path=":name" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default RouteParameters;
