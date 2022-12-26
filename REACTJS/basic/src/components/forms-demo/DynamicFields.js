import React, { useState } from "react";
const DynamicFields = () => {
  const [user, setUser] = useState({
    name: "",
    mobiles: [{ id: 1, value: "" }],
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleMobileChange = (e) => {
    const { name: index, value } = e.target;
    const arr = [...user.mobiles];
    const mob = { ...arr[index], value };
    arr.splice(index, 1, mob);

    setUser({ ...user, mobiles: arr });
  };

  const addMobile = () => {
    const size = user?.mobiles?.length;

    const obj = [...user?.mobiles]?.sort((a, b) => b.id - a.id)[0];

    if (size <= 4)
      setUser({
        ...user,
        mobiles: [...user.mobiles, { id: obj.id + 1, value: "" }],
      });
  };

  const removeMobile = (id) => {
    if (user?.mobiles?.length > 1) {
      const arr = [...user?.mobiles].filter((mob) => mob?.id !== id);
      setUser({ ...user, mobiles: arr });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
  };
  return (
    <>
      <h2>Dynamic Fields</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} /> <br />
        <label>Mobile:</label>
        {user?.mobiles?.map(({ id, value }, i) => {
          return (
            <div key={id}>
              <input type="text" name={i} onChange={handleMobileChange} />
              <button
                disabled={user?.mobiles?.length <= 1}
                type="button"
                onClick={() => removeMobile(id)}
              >
                X
              </button>
              {user?.mobiles?.length - 1 === i && (
                <button
                  type="button"
                  disabled={user?.mobiles?.length >= 4}
                  onClick={addMobile}
                >
                  +
                </button>
              )}
            </div>
          );
        })}
        <label>city:</label>
        <input type="text" name="city" onChange={handleChange} /> <br />
      </form>
    </>
  );
};

export default DynamicFields;
