import React from "react";
// import "./mystyle.css";
// import "./anotherstyle.css";
import style1 from "./style1.module.css";
import style2 from "./style2.module.css";
const stylingDemo = () => {
  return (
    <>
      <h2 className={style1.title}>style Demo</h2>
      <p className={style2.heading}>Sample Content</p>
      {/* <h2 className="title">style Demo</h2>
        <p className="heading">Sample Content</p> */}
    </>
  );
};
export default stylingDemo;
