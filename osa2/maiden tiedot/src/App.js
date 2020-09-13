import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RenderCountries from './components/RenderCountries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleCountryChange = (event) => {
    setSearch(event.target.value)
  }

  const handleButtonClick = (event) => {
    setSearch(event.target.attributes.country.value)
  }

  const countriesFiltered = countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <form>
        Find countries: <input
          input={search}
          onChange={handleCountryChange} />
      </form>
    <RenderCountries countriesFiltered={countriesFiltered} onClick={handleButtonClick}/>
    </div>
  )
}

export default App
