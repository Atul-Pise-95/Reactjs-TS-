import React from "react";
// import { Button } from "@mui/material";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
const BasicStyles = () => {
  return (
    <>
      <h2>Basic Styles</h2>
      <Button variant="text" color="secondary">
        Click Me
      </Button>
      <Button variant="contained" color="error">
        Click Me
      </Button>
      <Button variant="outlined" color="warning">
        Click Me
      </Button>
      <Switch defaultChecked color="secondary" />
    </>
  );
};

export default BasicStyles;
