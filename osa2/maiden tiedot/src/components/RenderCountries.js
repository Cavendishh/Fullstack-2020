import React from 'react'
import Weather from './Weather'

const RenderCountries = (props) => {
  const countries = props.countriesFiltered

  if (countries.length > 10) {
    return (
      <p>More than 10 matches. Please specify. </p>
    )}

  else if (countries.length === 1) {
    return (
      <div>
        <h2>{countries[0].name}</h2>
        <p>
          Capital: {countries[0].capital} <br />
          Population: {countries[0].population}
        </p>
        <h3>Languages</h3>
        <ul>
          {countries[0].languages.map((lang) => {
            return <li key={lang.name}>{lang.name}</li>
          })}
        </ul>
          <img src={countries[0].flag} alt="country flag" widht="175" height="125" />
          <Weather capital={countries[0].capital}/>
      </div>
    )
  }

  else {
    return (
      countries.map(country => 
        <p key={country.name}>
          {country.name} 
          <button
            onClick={props.onClick}
            country={country.name}>
            Show
          </button>
        </p>)
      )
    }
}

export default RenderCountries
