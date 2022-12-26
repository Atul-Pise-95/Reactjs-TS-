import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const User = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => (
  <div
    style={{ border: "1px solid black", padding: 50, margin: 5, width: 300 }}
  >
    <h5>
      <span style={{ color: "red" }}>Id:</span>
      <Link to={`${id}`}>{id}</Link>
    </h5>
    <h3>
      <span style={{ color: "red" }}>Name:</span>
      {name}
    </h3>
    <h5>
      <span style={{ color: "red" }}>UserName:</span>
      {username}
    </h5>
    <h5>
      <span style={{ color: "red" }}>Email:</span>
      {email}
    </h5>
    <section style={{ color: "green" }}>
      <h5>
        <span style={{ color: "red" }}>Address:</span>
        {address.street}
      </h5>
      <h5>{address.suite}</h5>
      <h5>{address.city}</h5>
      <h5>{address.zipcode}</h5>
      <h5>{address.geo.lat}</h5>
      <h5>{address.geo.lng}</h5>
    </section>
    <h5>
      <span style={{ color: "red" }}>Phone:</span>
      {phone}
    </h5>
    <h5>
      <span style={{ color: "red" }}>website:</span>
      {website}
    </h5>
    <section style={{ color: "green" }}>
      <h5>
        <span style={{ color: "red" }}>Company:</span>
        {company.name}
      </h5>
      <h5>{company.catchPhrase}</h5>
      <h5>{company.bs}</h5>
    </section>
  </div>
);

const Task1 = () => {
  const [state, setState] = useState([]);
  const funUser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setState(response.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  useEffect(() => {
    funUser();
  }, []);
  return (
    <>
      <h2>Users</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(state) && state.map((m) => <User key={m.id} {...m} />)}
      </section>
    </>
  );
};

export default Task1;
