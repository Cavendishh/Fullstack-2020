import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(5).fill(0))

  const handleGenerateAnecdote = () => setSelected(Math.round(Math.random() * (anecdotes.length - 1)))

  const handleAddVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const GenerateMostVoted = ({ votes, anecdotes }) => {
    const maxVote = Math.max(...votes)
    let maxIndex = votes.indexOf(maxVote)

    if (maxVote === 0) {
      return (
        <p>No anecdotes has been voted yet.</p>
      )
    }
    return (
      <p>"{anecdotes[maxIndex]}" has {votes[maxIndex]} votes.</p>
    )
  }
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Button onClick={handleGenerateAnecdote} text='Anecdotes' />
      <Button onClick={handleAddVote} text='Vote' />
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes.</p>
      <h3>Anecdote with the most votes</h3>
      <GenerateMostVoted votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90% of the development time.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as clearly as possible, you are, by definition, not smart enough to debug it'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)