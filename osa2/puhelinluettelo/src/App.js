import React, { useState, useEffect } from 'react'
import SearchPerson from './components/SearchPerson'
import NewPerson from './components/NewPerson'
import RenderPerson from './components/RenderPerson'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')

  const handleNoteChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setShowPerson(event.target.value)
  const personsFiltered = persons.filter((person) => person.name.toLowerCase().includes(showPerson.toLowerCase()))

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
      window.alert(newName + ' is already added to phonebook')
      setNewName('')
      setNewNumber('')
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
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
