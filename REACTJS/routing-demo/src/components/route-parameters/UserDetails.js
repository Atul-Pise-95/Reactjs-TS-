import React from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const { name } = useParams();
  return (
    <div>
      <h1 style={{ marginBottom: 30 }}>Display</h1>
      <h2>Name:{name}</h2>
    </div>
  );
};

export default UserDetails;
