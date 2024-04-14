import React from "react";

const Error = ({ errorMessage }) => {
  const error = {
    color: "red",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  if (errorMessage === null) {
    return null;
  }
  return <div style={error}>{errorMessage}</div>;
};

export default Error;
