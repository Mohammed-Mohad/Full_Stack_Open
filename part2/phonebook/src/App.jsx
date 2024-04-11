import { useState, useEffect, version } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import personService from "./Services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);
  const AddPerson = (event) => {
    // console.log("event: " , event);
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
    };
    const Names = persons.map((data) => data.name);
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      const updatePerson = { ...existingPerson, number: newNumber };
      personService
        .updatePerson(existingPerson.id, updatePerson)
        .then((response) => {
          console.log("response :", response);
          setPersons(persons.map(person=> person.id !== response.id ? person : response));
          setNewName("");
          setNewNumber("");
        });
      console.log("existing person: ", updatePerson);
    } else {
      if (Names.includes(newName)) {
        alert(`${newName} is already added to phonebook`);
      } else if (newName === "" || newNumber === "") {
        alert("please enter both name and number");
      } else {
        console.log(personService.addPerson.newObject);
        personService.addPerson(newObject).then((addedData) => {
          setPersons(persons.concat(addedData));
          setNewName("");
          setNewNumber("");
        });
      }
    }
  };

  const deletePhone = (id, name) => {
    // console.log("deleted: " , personService);
    confirm(`Delete ${name}`);
    personService.deletePerson(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
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
      <Persons filterItem={filterItem} onclick={deletePhone} />
    </div>
  );
};

export default App;
