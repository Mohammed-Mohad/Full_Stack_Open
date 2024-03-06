import React from "react";

const Persons = ({filterItem}) => {
  return (
    <div>
      {" "}
      {filterItem.map((person) => (
        <p>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
