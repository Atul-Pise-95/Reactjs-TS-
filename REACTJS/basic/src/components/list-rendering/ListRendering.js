import React, { useState } from "react";

const UserProfile = ({ id, name, city }) => {
  return (
    <div style={{ border: "1px solid", padding: 5, width: 200 }}>
      <h4>ID: {id}</h4>
      <h4>Name: {name}</h4>
      <h4>City: {city}</h4>
    </div>
  );
};

const ListRendering = () => {
  const [cities, setCities] = useState(["Pune", "Mumbai", "Delhi", "Pune"]);

  const [users] = useState([
    { id: 1, name: "aaa", city: "AAA" },
    { id: 2, name: "bbb", city: "BBB" },
    { id: 3, name: "ccc", city: "CCC" },
    { id: 4, name: "ddd", city: "DDD" },
    { id: 5, name: "eee", city: "EEE" },
  ]);

  return (
    <>
      <h2>List Rendering</h2>
      <ul>
        {cities.map((city, i) => {
          return <li key={city + i}>{city}</li>;
        })}
      </ul>
      <hr />

      <h3>User list</h3>

      <section style={{ display: "flex", justifyContent: "space-evenly" }}>
        {users.map((user, i) => {
          return <UserProfile key={user.id} {...user} />;
        })}
      </section>
    </>
  );
};

export default ListRendering;
