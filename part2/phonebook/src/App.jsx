import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response)=>{
      console.log(response.data);
      setPersons(response.data)
    })
  }, []);
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
      <Persons filterItem={filterItem} />
    </div>
  );
};

export default App;
