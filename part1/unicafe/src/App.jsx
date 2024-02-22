import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleCLick}>{props.text}</button>;
};
const StatisticsLine = (props) => {
  // console.log(props);

  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  console.log(props);
  if (props.total === 0) {
    return <p>no feedback given</p>;
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="good" value={props.good} />
          <StatisticsLine text="neutral" value={props.neutral} />
          <StatisticsLine text="bad" value={props.bad} />
          <StatisticsLine text="all" value={props.total} />
          <StatisticsLine text="average" value={props.average} />
          <StatisticsLine text="positivity" value={props.positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  

  const HandleGoodClick = ()=>
  {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const HandleNeutralClick = ()=>
  {
    setGood(neutral + 1)
    setTotal(total + 1)
  }
  const HandleBadClick = ()=>
  {
    setGood(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleCLick={HandleGoodClick} text="good" />
      <Button handleCLick={HandleNeutralClick} text="neutral" />
      <Button handleCLick={HandleBadClick} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        total={total}
        bad={bad}
        positive={(good * 100) / total}
        average={(good - bad) / total}
      />
    </div>
  );
};

export default App;
