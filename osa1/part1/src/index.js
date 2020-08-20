import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} old.
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