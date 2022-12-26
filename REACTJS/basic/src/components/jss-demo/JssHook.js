import React from "react";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import ThemeDemo from "./ThemeDemo";
const useStyles = createUseStyles({
  title: ({ color }) => ({
    backgroundColor: color,
    textAlign: "center",
    padding: {
      left: 10,
      right: 10,
      top: 5,
      bottom: 5,
    },
  }),
  heading: {
    backgroundColor: ({ color }) => color,
    textAlign: "right",
    padding: ({ height }) => height,
    margin: 10,
    borderRadius: 20,
  },
});
const JssHook = () => {
  const [styleState, setStyleState] = useState({ color: "red", height: 100 });
  const classes = useStyles({ ...styleState });
  return (
    <>
      <input
        type="color"
        onChange={(e) =>
          setStyleState({ ...styleState, color: e.target.value })
        }
      />
      <input
        type="number"
        value={styleState?.height}
        onChange={(e) =>
          setStyleState({ ...styleState, height: parseInt(e.target.value) })
        }
      />

      <h1 className={classes.title}>Jss using React Jss</h1>
      <h1 className={classes.heading}>Jss using React Jss</h1>
      <ThemeDemo />
    </>
  );
};

export default JssHook;
