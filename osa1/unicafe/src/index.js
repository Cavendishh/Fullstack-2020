import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad, amount, average }) =>{
  return (
    <div>
      <p>Statistics</p>
      <p>
        Good {good}<br />
        Neutral {neutral}<br />
        Bad {bad}<br />
        Feedback amount {amount}<br />
        Average {average / amount}<br />
        Positive feedback {good / amount * 100 + ' %'}
      </p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [amount, setAmount] = useState(0)

  const handlePosFeedback = () => {
    setGood(good + 1)
    setAverage(average + 1)
    setAmount(amount + 1)
  }

  const handleNeuFeedback = () => {
    setNeutral(neutral + 1)
    setAmount(amount + 1)
  }

  const handleBadFeedback = () => {
    setBad(bad + 1)
    setAverage(average - 1)
    setAmount(amount + 1)
  }

  return (
    <div>
      <p>Give feedback</p>
      <Button onClick={handlePosFeedback} text='Good' />
      <Button onClick={handleNeuFeedback} text='Neutral' />
      <Button onClick={handleBadFeedback} text='Bad' />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        amount={amount}
        average={average} />
    </div>

  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)