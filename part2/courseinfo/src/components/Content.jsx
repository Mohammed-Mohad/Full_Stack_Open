import React from "react";
import Part from "./Part";
const Content = ({ content }) => {
  const total = content.reduce((accumulator, item) => {
    return accumulator + item.exercises;
  }, 0);
  return (
    <div>
      {content.map((content) => (
        <Part name={content.name} />
      ))}
      <h5>total of {total} exercises </h5>
    </div>
  );
};

export default Content;
