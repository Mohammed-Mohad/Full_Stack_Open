import React from "react";

const Persons = ({ filterItem, onclick }) => {
  return (
    <div>
      {" "}
      {filterItem.map((person) => (
        <p>
          {person.name} {person.number}{" "}
          <button onClick={() => onclick(person.id,person.name)}>delete</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
