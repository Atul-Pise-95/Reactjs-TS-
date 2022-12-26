import React from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const { name } = useParams();
  return (
    <div
      style={{ backgroundColor: "orange", width: "79%", textAlign: "center" }}
    >
      <h2>User Detais-{name}</h2>
    </div>
  );
};

export default UserDetails;
