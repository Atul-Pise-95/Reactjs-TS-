import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const Task1Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <h2>Details</h2>
      <Link to="/">
        <h2 style={{ marginLeft: 100 }}>Back</h2>
      </Link>
      <div
        style={{
          border: "1px solid black",
          padding: 50,
          marginLeft: 200,
          width: 300,
        }}
      >
        <h5>
          <span style={{ color: "red" }}>Id:</span>
          {user.id}
          {console.log(user.id)}
        </h5>
        <h3>
          <span style={{ color: "red" }}>Name:</span>
          {user.name}
        </h3>
        <h5>
          <span style={{ color: "red" }}>UserName:</span>
          {user.username}
        </h5>
        <h5>
          <span style={{ color: "red" }}>Email:</span>
          {user.email}
        </h5>
        <section style={{ color: "green" }}>
          <h5>
            <span style={{ color: "red" }}>Address:</span>
            {user?.address?.street}
          </h5>
          <h5>{user?.address?.suite}</h5>
          <h5>{user?.address?.city}</h5>
          <h5>{user?.address?.zipcode}</h5>
          <h5>{user?.address?.geo?.lat}</h5>
          <h5>{user?.address?.geo?.lng}</h5>
        </section>
        <h5>
          <span style={{ color: "red" }}>Phone:</span>
          {user.phone}
        </h5>
        <h5>
          <span style={{ color: "red" }}>website:</span>
          {user.website}
        </h5>
        <section style={{ color: "green" }}>
          <h5>
            <span style={{ color: "red" }}>Company:</span>
            {user?.company?.name}
          </h5>
          <h5>{user?.company?.catchPhrase}</h5>
          <h5>{user?.company?.bs}</h5>
        </section>
      </div>
    </>
  );
};

export default Task1Details;
