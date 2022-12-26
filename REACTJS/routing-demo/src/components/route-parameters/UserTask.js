import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
const UserTask = () => {
  return (
    <section
      style={{
        display: "flex",
        height: "80vh",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "30%",
          height: "100%",
          backgroundColor: "palegoldenrod",
          border: "3px solid cyan",
        }}
      >
        <UserList />
      </div>
      <div
        style={{
          height: "100%",
          backgroundColor: "palegreen",
          flexGrow: 1,
          border: "3px solid magenta",
        }}
      >
        <Routes>
          <Route path=":name" element={<UserDetails />} />
        </Routes>
      </div>
    </section>
  );
};

export default UserTask;
