import React, { useState, useEffect } from 'react'
import SearchPerson from './components/SearchPerson'
import NewPerson from './components/NewPerson'
import RenderPerson from './components/RenderPerson'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('test')
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

  const handleRemovePerson = (name, id) => {
    if (window.confirm('Do you really want to delete this person?')) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(n => n.id !== id));
      })}
    }    

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(newName + ' is already added to phonebook, replace the old number with a new one?')) {        
        const personFound = persons.find((person) => person.name === newName)
        
        personService
          .update(personFound.id, { ...personFound, number: newNumber })
          .then(response => setPersons(persons.map(person => (person.name === newName ? response : person))))
      }
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
        <RenderPerson personsFiltered={personsFiltered} handleRemovePerson={handleRemovePerson}
      />
    </div>
  )
}

export default App;
