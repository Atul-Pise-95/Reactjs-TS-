import React, { useEffect, useState } from "react";
import axios from "axios";

const User = ({ avatar, first_name, last_name, id, email }) => (
  <div style={{ width: 250, border: "1px solid #000", margin: 5, padding: 5 }}>
    <img src={avatar} style={{ width: "100%" }} />
    <h4>
      {id} - {first_name} {last_name}{" "}
    </h4>
    <h4>Email: {email}</h4>
  </div>
);

const AxiosSample = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = (page = 1) => {
    //     fetch(`https://reqres.in/api/users?page=${page}`, { method: "get" })
    //       .then(async (response) => {
    //         // console.log("Response: ", response);

    //         const responseBody = await response.json();
    //         // console.log("response body: ", responseBody);
    //         setUsers(responseBody.data);
    //       })
    //       .catch((err) => {
    //         console.log("Error: ", err);
    //       });

    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        setUsers(response.data.data);
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

export default AxiosSample;
