import React , {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button
        handleClick={increaseByOne}
        text='Plus'
      />
      <Button
        handleClick={setToZero}
        text='Zero'
      />
      <Button
        handleClick={decreaseByOne}
        text='Minus'
      />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

ReactDOM.render(<App />, document.getElementById('root'))