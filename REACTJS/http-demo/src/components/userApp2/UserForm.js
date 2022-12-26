import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
const UserForm = () => {
  const [user, setUser] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
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
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <TextField
          label="First Name"
          name="first"
          value={user?.name?.first}
          variant="outlined"
          onChange={handleNameChange}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Last Name"
          name="last"
          value={user?.name?.last}
          variant="outlined"
          onChange={handleNameChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Mobile"
          name="mobile"
          value={user?.mobile}
          variant="outlined"
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Email"
          name="email"
          value={user?.email}
          variant="outlined"
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Password"
          name="password"
          value={user?.password}
          variant="outlined"
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="City"
          name="city"
          value={user?.city}
          variant="outlined"
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="Status"
            id="demo-simple-select"
            label="Status"
            name="status"
            value={user?.status}
            variant="outlined"
            onChange={handleChange}
          >
            <MenuItem value={1}>Active</MenuItem>
            <MenuItem value={0}>InActive</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default UserForm;
