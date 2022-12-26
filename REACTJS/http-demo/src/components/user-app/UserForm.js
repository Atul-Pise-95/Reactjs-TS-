import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
const UserForm = ({ operation, innitial, loadUsers, handleClose }) => {
  const [user, setUser] = useState({
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
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      name: {
        ...user.name,
        [name]: value,
      },
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    if (innitial) setUser({ ...innitial });
  }, [innitial]);
  const clearFields = () => {
    setUser({
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
  };

  const handleSubmit = () => {
    if (operation == "edit") {
      UserService.updateUser(user.id, user)
        .then(() => {
          alert("User Updated Successfully.");
          loadUsers();
          clearFields();
          handleClose();
        })
        .catch((err) => {
          console.log(err);
          alert("User Could not updated...");
        });
    } else {
      UserService.createUser(user)
        .then((res) => {
          alert("User Created successfully");
          loadUsers();
          clearFields();
          handleClose();
        })
        .catch(() => {
          alert("user not created...");
        });
    }
  };
  return (
    <Grid container spacing={2} paddingTop={2}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          variant="outlined"
          label="First Name"
          name="first"
          value={user?.name?.first}
          onChange={handleNameChange}
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          variant="outlined"
          label="Last Name"
          name="last"
          value={user?.name?.last}
          onChange={handleNameChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Mobile"
          name="mobile"
          value={user?.mobile}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          value={user?.email}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          name="password"
          value={user?.password}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="City"
          name="city"
          value={user?.city}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            id="demo-simple-select"
            value={user.status}
            name="status"
            label="Status"
            onChange={handleChange}
            required
          >
            <MenuItem value={1}>Active</MenuItem>
            <MenuItem value={0}>InActive</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Button
        fullWidth
        style={{ marginTop: 10 }}
        xs={12}
        color="primary"
        variant="contained"
        onClick={handleSubmit}
        disabled={
          !user?.name?.first ||
          !user?.name?.last ||
          !user?.mobile ||
          !user?.email ||
          !user?.city ||
          !user?.password
        }
      >
        {operation == "edit" ? "Update" : "Create"}
      </Button>
    </Grid>
  );
};

export default UserForm;
