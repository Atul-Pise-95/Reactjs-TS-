import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    Axios.get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <h2>User Details</h2>
      <Link to="/">Back to User List</Link>
      <img src={user.avatar} />
      <h3>
        Name: {user.first_name} {user.last_name}
      </h3>
      <h3>Email:{user.email}</h3>
    </>
  );
};

export default UserDetails;
