import React, { useEffect, useState } from "react";
import axios from "axios";

const User = ({ id, title, body }) => (
  <div style={{ width: 250, border: "1px solid #000", margin: 5, padding: 5 }}>
    <h4>Id:{id}</h4>
    <h4>Title:{title}</h4>
    <h4>Body:{body}</h4>
  </div>
);

const Task2 = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <h2>Sample Page</h2>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map((u, i) => <User key={u.id} {...u} />)}
      </section>
    </>
  );
};

export default Task2;
