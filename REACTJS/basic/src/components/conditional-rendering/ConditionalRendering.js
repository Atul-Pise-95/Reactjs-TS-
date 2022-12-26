import React, { useState } from "react";
const ConditionalRendering = () => {
  const [isLogin, setIsLogin] = useState(true);
  let greetMsg = "";

  if (isLogin) {
    greetMsg = "Welcome Topper Skills";
  } else {
    greetMsg = "Welcome Guest";
  }
  return (
    <>
      <h2>Conditional Rendering</h2>
      {greetMsg}
      <h3>Welcome {isLogin ? "Topper Skills" : "Guest"}</h3>
      {isLogin && (
        <ui>
          <li>Profile</li>
          <li>Logout</li>
        </ui>
      )}
    </>
  );
};

export default ConditionalRendering;
