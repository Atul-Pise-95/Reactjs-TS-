import React, { useRef } from "react";
import MapSource from "./MapSource";
const MapMethod = () => {
  const mapRef = useRef({});
  return (
    <>
      <button onClick={() => mapRef.current.simple("hi")}>click</button>
      <MapSource ref={mapRef} />
    </>
  );
};

export default MapMethod;
