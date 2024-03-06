import React from "react";

const Filter = ({onChange}) => {
  return (
    <div>
      filter shown with <input type="text" onChange={onChange} />
    </div>
  );
};

export default Filter;
