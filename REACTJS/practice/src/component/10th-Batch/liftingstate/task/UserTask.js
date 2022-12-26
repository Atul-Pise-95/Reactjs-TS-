import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
const Usertask = () => {
  const [users, setUsers] = useState([]);
  const getUser = (user) => {
    setUsers([...users, user]);
  };
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("users"));
    if (u) setUsers(u);
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <h2>User Task</h2>
      <AddUser getUser={getUser} />
      <hr />
      <UserList users={users} />
    </>
  );
};

export default Usertask;
