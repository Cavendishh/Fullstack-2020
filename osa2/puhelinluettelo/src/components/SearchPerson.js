import React from 'react'

const SearchPerson = (props) => {
  return (
    <form>
      Search for person(s):
    <input
      value={props.showPerson}
      onChange={props.handleFilterChange} />
    </form>
  )
}

export default SearchPerson;
