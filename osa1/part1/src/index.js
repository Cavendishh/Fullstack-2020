import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} old.
      </p>
      <p>
        So you were probably born {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
const nimi = "Pekka"
const ika = "18"

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Janne" age={16 + 20} />
      <Hello name={nimi} age={ika} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))