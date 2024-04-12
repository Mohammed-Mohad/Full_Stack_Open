import { useState, useEffect, version } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";
import personService from "./Services/persons";
import Notification from "./Components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState("Added user");
  const [added, setAdd] = useState(false);
  console.log("====================================");
  console.log("added:", added);
  console.log("====================================");
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
          setPersons(
            persons.map((person) =>
              person.id !== response.id ? person : response
            )
          );
          console.log(added);
          setNotification(`Updated ${newObject.name} 's phone number`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
          setAdd(!added);
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
          setAdd(!added);
          setNotification(`Added ${newObject.name}`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
          setAdd(!added);
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
      setAdd(!added);
      setNotification(`Deleted ${name}`);
      setTimeout(() => {
        setNotification(null);
      }, 5000);
      setAdd(!added);
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
      {added && <Notification message={notification} />}
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
