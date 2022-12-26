import React from "react";
import { makeStyles } from "@mui/styles";
import { Styled } from "@mui/material";
//Jss Hook API
const useStyles = makeStyles((theme) => ({
  title: ({ color }) => ({
    backgroundColor: color,
  }),
}));
//styled components
const H3 = Styled("h3")({
  backgroundColor: "darkgray",
  padding: "5px 20px",
});
const MUIstyles = () => {
  const classes = useStyles({ color: "cyan" });
  return (
    <>
      <h1 className={classes.title}>Material Styles</h1>
      <H3>MERN stack training</H3>
    </>
  );
};

export default MUIstyles;
