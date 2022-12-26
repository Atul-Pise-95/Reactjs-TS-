import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "./thunkActionCreators";
import { selectEmployees } from "./EmpSlice";

const Profile = ({ id, first_name, last_name, email, avatar }) => (
  <div
    style={{ width: 250, padding: 5, margin: 5, boxShadow: "2px 2px 3px #999" }}
  >
    <img src={avatar} style={{ width: "100%" }} />
    <h3>
      {id}-{first_name} {last_name}
    </h3>
    <h4>{email}</h4>
  </div>
);

const EmployeeList = () => {
  const dispatch = useDispatch();
  // access data from store
  const employees = useSelector(selectEmployees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <>
      <h2>Employee List</h2>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(employees) &&
          employees.map((emp) => <Profile key={emp.id} {...emp} />)}
      </section>
    </>
  );
};

export default EmployeeList;
