import React, { useState } from "react";

import { createUseStyles } from "react-jss";

// const useStyles =  createUseStyles(object)
// const useStyles =  createUseStyles(callback)

const useStyles = createUseStyles({
  title: (props) => ({
    backgroundColor: props.bgColor,
    padding: 5,
    "&:hover": {
      backgroundColor: "maroon",
    },
  }),
});

const JSSStyling = () => {
  const [color, setColor] = useState("red");
  const classes = useStyles({ bgColor: color });

  return (
    <>
      <h2
        style={{
          backgroundColor: "orange",
          padding: 5,
        }}
      >
        JSS Styling
      </h2>
      <h2 className={classes.title}>Using React jss</h2>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </>
  );
};

export default JSSStyling;
