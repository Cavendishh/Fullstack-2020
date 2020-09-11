import React from 'react'

const RenderPerson = (props) => {
  return (
    props.personsFiltered.map((person) =>
      <p key={person.name}>
        {person.name} {person.number}
      </p>)
  )
}

export default RenderPerson
