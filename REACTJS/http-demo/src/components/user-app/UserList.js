import React, { useEffect, useState } from "react";
import MuiDataTable from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";
import FabButton from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AddEditUser from "./AddEditUser";
import Swal from "sweetalert2";
import UserService from "../../services/UserService";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [operation, setOperation] = useState("add");
  const [openDialogue, setOpenDialogue] = useState(false);
  const [innitial, setInnitial] = useState({
    name: {
      first: "",
      last: "",
    },
    mobile: "",
    email: "",
    city: "",
    password: "",
    status: 1,
  });
  const loadUsers = () => {
    UserService.fetchAll()
      .then((res) => {
        setUsers(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const addUser = () => {
    setOperation("add");
    setInnitial({
      name: {
        first: "",
        last: "",
      },
      mobile: "",
      email: "",
      city: "",
      password: "",
      status: 1,
    });
    setOpenDialogue(true);
  };
  const editUser = (user) => {
    setOperation("edit");
    setInnitial(user);
    setOpenDialogue(true);
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: "Ar you sure?",
      text: "You wan't to be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cinfirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)
          .then(() => {
            loadUsers();
            Swal.fire("Deleted!", "user has been deleted", "success");
          })
          .catch(() => {
            Swal.fire("Not Deleted!", "The user has not been deleted", "error");
          });
      }
    });
  };

  const handleDialogueClose = () => {
    setOpenDialogue(false);
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
        filter: false,
        sort: true,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return `${user?.name?.first} ${user?.name?.last}`;
        },
      },
    },
    {
      labbel: "Mobile",
      name: "mobile",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      labbel: "Email",
      name: "email",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      labbel: "City",
      name: "city",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      labbel: "Password",
      name: "password",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      labbel: "Status",
      name: "status",
      options: {
        filter: true,
        sort: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return user?.status == 1 ? "Active" : "Inactive";
        },
      },
    },
    {
      labbel: "Action",
      name: "action",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => deleteUser(user.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <AddEditUser
        handleClose={handleDialogueClose}
        open={openDialogue}
        operation={operation}
        innitial={innitial}
        loadUsers={loadUsers}
      />
      <MuiDataTable
        title={
          <b style={{ fontSize: 24, color: "magenta" }}>
            User List
            {
              <FabButton
                color="primary"
                variant="contained"
                sx={{ marginLeft: 10 }}
                onClick={addUser}
              >
                Add <AddIcon size="big" />
              </FabButton>
            }
          </b>
        }
        columns={columns}
        data={users}
      />
    </>
  );
};

export default UserList;
