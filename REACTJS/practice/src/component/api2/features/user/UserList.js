import React, { useEffect, useState } from "react";
import UserService from "../../services/userService";
import MUIDatables from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddEditUser from "./AddEditUser";
import Swal from "sweetalert2";
import config from "../../api/config.json";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [operation, setOperation] = useState("add");
  const [openDialog, setOpenDialog] = useState(false);
  const [initialUser, setinitialUser] = useState({});

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const addUser = () => {
    setOperation("add");
    setinitialUser({});
    setOpenDialog(true);
  }; //addUser

  const editUser = (user) => {
    setOperation("edit");
    setinitialUser(user);
    setOpenDialog(true);
  }; //editUser

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)
          .then((response) => {
            loadUsers();
            Swal.fire("Deleted!", "The user has been deleted", "Success");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("Not Deleted!", "The user has not been deleted", "error");
          });
      }
    });
  }; //deleteUser

  const loadUsers = () => {
    // for fetch the data
    UserService.fetchAll()
      .then((response) => {
        console.log(response.data.data);
        setUsers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const columns = [
    {
      label: "Avatar",
      name: "avatar",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <img
              style={{ width: 80, heigth: 80 }}
              src={
                user.avatar
                  ? config.serverURL + user.avatar
                  : "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              }
            />
          );
        },
      },
    },
    {
      label: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          if (typeof user?.name == "object") {
            return `${user?.name?.first} ${user?.name?.last}`; // if some name are object then print object.name
          }
          return user?.name; // if name are string then print name
        },
      },
    },
    {
      label: "Mobile",
      name: "mobile",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Email",
      name: "email",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Gender",
      name: "gender",
      options: {
        sort: true,
        filter: true,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return user.status === 1 ? "Active" : "Inactive";
        },
      },
    },
    {
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton>
                <EditIcon color="primary" onClick={() => editUser(user)} />
              </IconButton>
              <IconButton>
                <DeleteIcon
                  color="error"
                  onClick={() => deleteUser(user?._id)}
                />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <Button variant="contained" color="primary" onClick={addUser}>
        New+
      </Button>
      <AddEditUser
        open={openDialog}
        operation={operation}
        handleClose={handleDialogClose}
        initialUser={initialUser}
        loadUsers={loadUsers}
      />
      <MUIDatables title="User List" data={users} columns={columns} />
    </>
  );
};

export default UserList;
