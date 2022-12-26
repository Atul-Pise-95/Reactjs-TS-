import React from "react";
import "./User.module.css";
const Users = () => {
  const obj = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <h2 style={{ color: "magenta", marginLeft: 220 }}>
        <b>
          <i>User Details</i>
        </b>
      </h2>
      <div>
        <table>
          <tr>
            <td style={{ fontWeight: "bold", color: "blue" }}>LastName</td>
            <td style={{ fontWeight: "bold", color: "blue" }}>FirstName</td>
            <td
              style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
            >
              Email
            </td>
            <td style={{ fontWeight: "bold", color: "blue" }}>Password</td>
          </tr>
          {obj.map((m, i) => (
            <tr key={m + i}>
              <td>{m.lastName}</td>
              <td>{m.firstName}</td>
              <td>{m.email}</td>
              <td>{m.password}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Users;
