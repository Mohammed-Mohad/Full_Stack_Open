const Header = (props) => {
  console.log(props.course);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => (
  
  <p>
    {props.part.name} {props.part.exercise}
  </p>
);

const Content = (props) => {
  console.log(props.part1.name);
  return (
    <>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </>
  );
};

const Total = (props) => {
  console.log("Hello from Total");
  return (
    <p>
      Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}{" "}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
 

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]} />

      <Total
        exercise1={course.parts[0].exercises}
        exercise2={course.parts[1].exercises}
        exercise3={course.parts[2].exercises}
      />
    </div>
  );
};

export default App;
