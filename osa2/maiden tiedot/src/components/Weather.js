import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState('')
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
      .then(response => {
        setWeather(response.data.current)
      })
  }, [])

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <strong>Temparature: </strong>{weather.temperature} Celsius <br />
      <img src={weather.weather_icons} alt="Weather status icon" /> <br />
      <strong>Wind: </strong>{weather.wind_speed} mph direction {weather.wind_dir}
    </div>
  )
}

export default Weather