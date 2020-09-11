import React, { useState } from 'react'
import SearchPerson from './components/SearchPerson'
import NewPerson from './components/NewPerson'
import RenderPerson from './components/RenderPerson'

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

  const handleNoteChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleFilterChange = (event) => setShowPerson(event.target.value)
  
  const personsFiltered = persons.filter((person) => person.name.toLowerCase().includes(showPerson.toLowerCase()))

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

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchPerson
        showPerson={showPerson}
        handleFilterChange={handleFilterChange}
      />
      <h2>Add a new person</h2>
      <NewPerson
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNoteChange={handleNoteChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
        <RenderPerson personsFiltered={personsFiltered}
      />
    </div>
  )
}

export default App;
