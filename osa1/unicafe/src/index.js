import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Results = ({ good, neutral, bad }) =>{
  return (
    <div>
      <p>Statistics</p>
      <p>Good {good}<br />Neutral {neutral}<br />Bad {bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlePosFeedback = () => setGood(good + 1)
  const handleNeuFeedback = () => setNeutral(neutral + 1)
  const handleBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <p>Give feedback</p>
      <Button onClick={handlePosFeedback} text='Good' />
      <Button onClick={handleNeuFeedback} text='Neutral' />
      <Button onClick={handleBadFeedback} text='Bad' />
      <Results good={good} neutral={neutral} bad={bad} />
    </div>

  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)