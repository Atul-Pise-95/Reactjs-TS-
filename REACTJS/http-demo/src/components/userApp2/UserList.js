import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddEdit from "./AddEdit";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [operation, setOperation] = useState("add");
  const [dialog, setDialogue] = useState(false);
  const loadUsers = () => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const handleAddClick = () => {
    setOperation("add");
    setDialogue(true);
    console.log();
  };
  const handleEdit = (user) => {
    setOperation("Edit");
    setDialogue(true);
  };
  const handleDelete = (id) => {};
  const handleClose = () => {
    setDialogue(false);
  };
  const columns = [
    {
      label: "ID",
      name: "id",
    },
    {
      label: "Name",
      name: "name",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return `${user?.name?.first} ${user?.name?.last}`;
        },
      },
    },

    {
      label: "Mobile",
      name: "mobile",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      label: "Email",
      name: "email",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      label: "Password",
      name: "password",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      label: "City",
      name: "city",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return user.status == 1 ? "Active" : "InActive";
        },
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => handleEdit(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete()}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <AddEdit operation={operation} open={dialog} handleClose={handleClose} />
      <MUIDataTable
        title={
          <b style={{ fontSize: 24 }}>
            User List{" "}
            {
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddClick}
              >
                Add +
              </Button>
            }
          </b>
        }
        data={users}
        columns={columns}
      />
    </>
  );
};

export default UserList;
