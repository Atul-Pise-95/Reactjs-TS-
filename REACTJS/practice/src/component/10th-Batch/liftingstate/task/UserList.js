import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const UserList = ({ users }) => {
  const columns = [
    { field: "name", width: 150 },
    { field: "mobile", width: 150 },
    { field: "email", width: 150 },
    { field: "password", width: 150 },
  ];

  return (
    <>
      <h2>User List</h2>
      <section style={{ height: 500 }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row.name + row.mobile}
        />
      </section>
    </>
  );
};
export default UserList;
