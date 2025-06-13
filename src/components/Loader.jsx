import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        aligItems: "center",
        justifyContent: "center",
      }}
    >
      <GridLoader
        style={{
          color: "#42b883",
          display: "block",
          margin: "auto",
          borderColor: "#42b883",
        }}
      />
    </div>
  );
};

export default Loader;
