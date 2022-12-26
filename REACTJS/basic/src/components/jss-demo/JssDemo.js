import React from "react";
import JssHook from "./JssHook";
import SimpleJSS from "./simpleJSS";
import { ThemeProvider } from "react-jss";
const JssDemo = () => {
  const MyTheme = {
    primary: "blue",
    secondry: "magenta",
  };
  return (
    <>
      <h2>Jss Demo</h2>
      <SimpleJSS />
      <ThemeProvider theme={MyTheme}>
        <JssHook />
      </ThemeProvider>
    </>
  );
};

export default JssDemo;
