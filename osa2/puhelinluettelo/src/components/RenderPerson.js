import React from 'react'

const RenderPerson = (props) => {
  return (
    props.personsFiltered.map((person) =>
      <p key={person.name}>
        {person.name} {person.number}
        <button onClick={() => props.handleRemovePerson(person.name, person.id)}>
          Remove
        </button>
      </p>)
  )
}

export default RenderPerson
