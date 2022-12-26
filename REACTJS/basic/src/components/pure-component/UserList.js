import React, { useCallback, useState } from "react";
import User from "./User";
const UserList = () => {
  console.log("UserList");
  const [users, setUsers] = useState([
    { id: 1, name: "aaa", mobile: "11111", City: "Pune" },
    { id: 2, name: "bbb", mobile: "22222", City: "Mumbai" },
    { id: 3, name: "ccc", mobile: "33333", City: "Delhi" },
    { id: 4, name: "ddd", mobile: "44444", City: "" },
  ]);

  const [userProfile, setUserProfile] = useState({
    name: "",
    mobile: "",
    city: "",
  });
  const deleteUser = useCallback(
    (id) => {
      //for avoiding rerendering, useCallback with dependency araay.
      const userArr = users.filter((user) => user.id != id);
      setUsers(userArr);
    },
    [users]
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };
  const addUser = () => {
    const id = users.reduce((pre, user) => {
      if (pre <= user.id) return user.id;
      else return pre;
    }, 0);
    setUsers([...users, { ...userProfile, id: id + 1 }]);
  };
  return (
    <>
      <h2>User List</h2>
      <section style={{ padding: 20, backgroundColor: "cyan" }}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <input
          type="text"
          name="mobile"
          onChange={handleChange}
          placeholder="Enter Mobile"
        />
        <input
          type="text"
          name="city"
          onChange={handleChange}
          placeholder="Enter City"
        />
        <button onClick={addUser}>Add+</button>
      </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {users.map((user) => {
          return <User key={user.id} user={user} deleteUser={deleteUser} />;
        })}
      </section>
    </>
  );
};

export default UserList;
