import React, { useEffect, useState } from "react";
const User = ({ id, avatar, first_name, last_name, email }) => (
  <div
    style={{
      width: 300,
      height: 500,
      border: "1px solid black",
      padding: 5,
      margin: 5,
    }}
  >
    <img src={avatar} style={{ width: "100%" }} />
    <h5>
      {id}-{first_name} {last_name}
    </h5>
    <h5>Email: {email}</h5>
  </div>
);
const SimpleAPI = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2", { method: "get" })
      .then(async (response) => {
        const responseBody = await response.json();
        setUsers(responseBody.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <>
      <h2>Users List</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map((m, i) => <User key={m.id} {...m} />)}
      </div>
    </>
  );
};

export default SimpleAPI;
