import React from "react";
import { Route, Routes } from "react-router-dom";
import Task1 from "./Task1";
import Task1Details from "./Task1Details";
const RuoteHttp2 = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Task1 />} />
        <Route path=":id" element={<Task1Details />} />
      </Routes>
    </>
  );
};

export default RuoteHttp2;
