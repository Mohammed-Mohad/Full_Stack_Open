import { useState } from "react";

const Anecdote = ({ anecdote, vote }) => {
  console.log(anecdote);
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {vote} votes</p>
    </div>
  );
};

const Button = ({ HandleClick, text }) => (
  <button onClick={HandleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Uint16Array(8));
  const [mostVote,setMostVote] = useState(0)

  const HandleNextClick = () => {
    const random = Math.floor(Math.random() * 8);
    setSelected(random);
  };

  let max = vote[0];
  let maxIndex = 0;

  for (let i = 1; i < vote.length; i++) {
    if (max < vote[i]) {
      max = vote[i];
      maxIndex = i;
    }
  }

  const HandleVoteClick = () => {
    const copy = [...vote];
    copy[selected]++;
    setVote(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} vote={vote[selected]} />

      <Button HandleClick={HandleVoteClick} text="Vote" />
      <Button HandleClick={HandleNextClick} text="Next Anecdote" />

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[maxIndex]} vote={vote[maxIndex]}/>
    </div>
  );
};

export default App;
