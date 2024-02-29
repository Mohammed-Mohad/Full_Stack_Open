import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <div>
      {course.map((course) => (
        <div key={course.id}>
          <Header header={course.name} />
          <Content content={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
