import React from "react";
import Users from "./users";
class UserList extends React.Component {
  render() {
    return (
      <section>
        <h2>User List</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Users name="Atul" mobile="1111" email="atul@gmail.com" />
          <Users name="Ajay" mobile="2222" email="ajay@gmail.com" />
          <Users name="Rahul" mobile="3333" email="rahul@gmail.com" />
          <Users name="Ram" mobile="4444" email="ram@gmail.com" />
          <Users name="Karan" mobile="5555" email="karan@gmail.com" />
          <Users name="vikram" mobile="6666" email="vikram@gmail.com" />
        </div>
      </section>
    );
  }
}

export default UserList;
