import React from "react";
import axios from "axios";

const Sample = () => {
  const [data, setData] = React.useState([]);
  const load = () => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    load();
  }, []);
  return (
    <>
      <h2>App</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data &&
          data.map((u, i) => {
            return (
              <div
                key={u + i}
                style={{ border: "1px solid black", margin: 5, padding: 5 }}
              >
                <h2>Name:{u.name}</h2>
                <h4>Gender:{u.gender}</h4>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Sample;
