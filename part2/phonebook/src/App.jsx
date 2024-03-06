import { useState } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const AddPerson = (event) => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
    };
    const Names = persons.map((data) => data.name);
    if (Names.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if (newName === "" || newNumber === "") {
      alert("please enter both name and number");
    } else {
      setPersons(persons.concat(newObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const HandleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const HandleNameInput = (e) => {
    setNewName(e.target.value);
  };
  const HandleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };

  const filterItem = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={HandleFilter} />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onSubmit={AddPerson}
        HandleNameInput={HandleNameInput}
        HandleNumberInput={HandleNumberInput}
      />
      <h2>Numbers</h2>
      <Persons filterItem={filterItem}/>
    </div>
  );
};

export default App;
