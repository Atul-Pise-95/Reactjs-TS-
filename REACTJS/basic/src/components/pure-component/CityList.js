import React, { memo } from "react";

const CityList = ({ items }) => {
  console.log("CityList...");
  return (
    <>
      <h2>City List</h2>
      {items.map((city) => (
        <li key={city}>{city}</li>
      ))}
    </>
  );
};

export default memo(CityList, (prevProps, nextProps) => {
  if (prevProps.items[0] == nextProps.items[0]) {
    return true;
  } else {
    return false;
  }
});
