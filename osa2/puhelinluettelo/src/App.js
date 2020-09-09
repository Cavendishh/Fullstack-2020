import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1231244'
    },
    { 
      name: 'Ada Lovelace',
      number: '39-44-5323523'
    },
    {
      name: 'Dan Abramov',
      number: '12-43-234345'
    },
    {
      name: 'Mary Poppendieck',
      number: '39-23-6423122'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setShowPerson(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const noteObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
      window.alert(newName + ' is already added to phonebook')
      setNewName('')
      setNewNumber('')
    } else {
      setPersons(persons.concat(noteObject))
      setNewName('')
      setNewNumber('')
    }    
  }

  const personsFiltered = persons.filter((person) =>
    person.name.toLowerCase().includes(showPerson.toLowerCase()))

  console.log(personsFiltered)

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        Filter shown with <input 
          value={showPerson}
          onChange={handleFilterChange} />
      </div>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input 
            value={newName}
            onChange={handleNoteChange} />
        </div>
        <div>
          Number: <input
            value={newNumber}
            onChange={handleNumberChange}
            />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App;
