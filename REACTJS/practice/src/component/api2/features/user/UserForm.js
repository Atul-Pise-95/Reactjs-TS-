import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import UserService from "../../services/userService";

const UserForm = ({ operation, initialUser, handleClose, loadUsers }) => {
  const [user, setUser] = useState({ gender: "female" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, name: { ...user.name, [name]: value } });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, address: { ...user.address, [name]: value } });
  };

  useEffect(() => {
    if (initialUser) setUser({ ...user, ...initialUser });
  }, [initialUser]);

  const handleSubmit = () => {
    if (operation == "edit") {
      UserService.updateUser(user?._id, user)
        .then((response) => {
          alert(response?.data?.message);
          loadUsers();
          handleClose();
        })
        .catch((err) => {
          let message = "Could not updated...";
          if (err?.response?.data?.message)
            message = err?.response?.data?.message;
          alert(message);
        });
    } else {
      UserService.createUser(user)
        .then((response) => {
          alert(response?.data?.message);
          loadUsers();
          handleClose();
        })
        .catch((err) => {
          let message = "Could not Created...";
          if (err?.response?.data?.message)
            message = err?.response?.data?.message;
          alert(message);
        });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item sx={12} md={6}>
        <TextField
          fullWidth
          varient="outlined"
          label="First name"
          name="first"
          value={user?.name?.first}
          onChange={handleNameChange}
        />
      </Grid>
      <Grid item sx={12} md={6}>
        <TextField
          fullWidth
          varient="outlined"
          label="Last name"
          name="last"
          value={user?.name?.last}
          onChange={handleNameChange}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          fullWidth
          varient="outlined"
          label="Mobile"
          name="mobile"
          value={user?.mobile}
          onChange={handleChange}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          fullWidth
          varient="outlined"
          label="Email"
          name="email"
          type="email"
          value={user?.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          fullWidth
          varient="outlined"
          label="Password"
          name="password"
          type="password"
          value={user?.password}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sx={12} md={6}>
        <TextField
          fullWidth
          varient="outlined"
          label="Street"
          name="street"
          value={user?.address?.street}
          onChange={handleAddressChange}
        />
      </Grid>
      <Grid item sx={12} md={6}>
        <TextField
          fullWidth
          varient="outlined"
          label="City"
          name="city"
          value={user?.address?.city}
          onChange={handleAddressChange}
        />
      </Grid>
      <Grid item sx={12} md={6}>
        <TextField
          fullWidth
          varient="outlined"
          label="Country"
          name="country"
          value={user?.address?.country}
          onChange={handleAddressChange}
        />
      </Grid>
      <Grid item sx={12} md={6}>
        <TextField
          fullWidth
          varient="outlined"
          label="Pincode"
          name="pincode"
          value={user?.address?.pincode}
          onChange={handleAddressChange}
        />
      </Grid>
      <Grid item sx={12}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="gender"
            value={user.gender}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            id="demo-simple-select"
            value={user.status}
            label="Status"
            name="status"
            onChange={handleChange}
          >
            <MenuItem value={1}>Active</MenuItem>
            <MenuItem value={0}>Inactive</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          {operation == "edit" ? "Update" : "Create"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserForm;
