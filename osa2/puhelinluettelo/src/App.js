import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const noteObject = {
      name: newName,
    }

    if (persons.some((element) => element.name.toLowerCase() === newName.toLowerCase())) {
      window.alert(newName + ' is already added to phonebook')
      setNewName('')
    } else {
      setPersons(persons.concat(noteObject))
      setNewName('')
    }    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNoteChange} />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App;
