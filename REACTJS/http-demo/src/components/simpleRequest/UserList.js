import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = (page = 1) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        setUsers(response?.data?.data);
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
      <h2>User List</h2>
      <button onClick={() => loadUsers(1)}>1</button>
      <button onClick={() => loadUsers(2)}>2</button>
      <hr />
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users.map((u, i) => <User key={u.id} {...u} />)}
      </section>
    </>
  );
};

export default UserList;
