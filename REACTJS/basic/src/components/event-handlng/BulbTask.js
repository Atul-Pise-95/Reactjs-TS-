import React, { useState } from "react";
const BulbTask = () => {
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVKHgrCYipTOslGqztB1L8tTvEJzqAadDTA&usqp=CAU";

  const green = "#008000";
  const red = "#FF0000";
  const [on, setOn] = useState(img);
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(green);

  const handleClick = () => {
    const change =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMf8gJinRP9hDVPwQfh6IRX_OKI7cTggkvw&usqp=CAU";
    setOn(change);
    setShow(false);
    setShow1(red);
  };
  const handleClick2 = () => {
    setOn(img);
    setShow(true);
    setShow1(green);
  };

  return (
    <>
      <h2>Bulb Task</h2>
      <img
        style={{ display: "flex", margin: "auto", height: 300, width: 300 }}
        src={on}
        alt=""
      />
      <button
        onClick={show ? handleClick : handleClick2}
        style={{
          display: "flex",
          margin: "auto",
          backgroundColor: show1,
          width: 100,
          marginTop: 50,
          justifyContent: "center",
        }}
      >
        {show ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default BulbTask;
