import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles((theme) => ({
  title: {
    backgroundColor: theme.primary,
  },
}));
const ThemeDemo = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>My Theme</h1>
    </>
  );
};

export default ThemeDemo;
