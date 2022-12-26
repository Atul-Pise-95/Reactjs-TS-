import React, { memo } from "react";
const User = ({ user, deleteUser }) => {
  console.log("User ", user.id);
  return (
    <div
      style={{
        width: 200,
        padding: 10,
        border: "1px solid #000",
        position: "relative",
      }}
    >
      <span
        onClick={() => deleteUser(user.id)}
        style={{
          backgroundColor: "red",
          padding: 5,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        X
      </span>
      <h2>Name: {user?.name}</h2>
      <h2>Mobile: {user?.mobile}</h2>
      <h2>City: {user?.city}</h2>
    </div>
  );
};

export default memo(User);
