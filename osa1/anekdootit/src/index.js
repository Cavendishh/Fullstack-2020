import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = ({ anecdotes, votepoints }) => {
  const [selected, setSelected] = useState(0)

  const handleGenerateAnecdote = () => {
    setSelected(Math.round(Math.random() * (anecdotes.length - 1)))
  }

  const handleAddVote = () => {
    votepoints[selected] += 1
  }

  /*const mostVoted = () => {
    const mostVoted = 0
    const i = 0
   
    votepoints.forEach(value => {
      if (value > 0) {
        mostVoted = value
      }
    })
  }*/

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Button onClick={handleGenerateAnecdote} text='Anecdotes' />
      <Button onClick={handleAddVote} text='Vote' />
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votepoints[selected]} votes.</p>
      <h3>Anecdote with the most votes</h3>
    </div>
  )
}

const votepoints = [0, 0, 0, 0, 0]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90% of the development time.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as clearly as possible, you are, by definition, not smart enough to debug it'
]

ReactDOM.render(
  <App anecdotes={anecdotes} votepoints={votepoints} />,
  document.getElementById('root')
)
