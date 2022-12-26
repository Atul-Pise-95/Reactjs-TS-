import React from "react";
import Accordians from "./Accordians";
import Carousel from "./Carousel";
const BootstarpDemo = () => {
  return (
    <>
      <h1 className="bg-primary">Bootstrap Demo</h1>
      <Accordians />
      <Carousel img1="logo.png" img2="logo.png" img3="logo.png" />
    </>
  );
};
export default BootstarpDemo;
