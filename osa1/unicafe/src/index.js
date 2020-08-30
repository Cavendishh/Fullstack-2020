import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Button creating component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

//Statistics creating component
const Statistics = ({ good, neutral, bad, amount, average }) =>{

  //If feedback has NOT been given - show this 
  if (amount === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  //Else if feedback has been given - feedback is shown
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Statistics</td>
          </tr>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Amount" value={amount} />
          <StatisticLine text="Average" value={average / amount} />
          <StatisticLine text="Positive" value={good / amount * 100 + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

//Adds the statisticline to the table
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

const App = () => {
  //Set constants for feedback statistics
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [amount, setAmount] = useState(0)

  //Eventhandler for positive feedbacks
  const handlePosFeedback = () => {
    setGood(good + 1)
    setAverage(average + 1)
    setAmount(amount + 1)
  }

  //Eventhandler for neutral feedbacks
  const handleNeuFeedback = () => {
    setNeutral(neutral + 1)
    setAmount(amount + 1)
  }

  //Eventhandler for negative feedbacks
  const handleBadFeedback = () => {
    setBad(bad + 1)
    setAverage(average - 1)
    setAmount(amount + 1)
  }

  //Creates the buttons and statistics with components
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