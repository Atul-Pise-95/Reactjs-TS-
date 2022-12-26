import React, { useState } from "react";
const FormPra = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  const handleChange = (e) => {
    setText1(e.target.value);
  };
  const handleChange2 = (e) => {
    setText3(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text1);
    setText2(text1);
    setText4(text3);
  };
  return (
    <>
      <h2>
        Form {text2} {text4}
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} value={text1} />
        <br />
        <input type="text" name="age" onChange={handleChange2} value={text3} />
        <br />
        <button>click me</button>
      </form>
    </>
  );
};

export default FormPra;
