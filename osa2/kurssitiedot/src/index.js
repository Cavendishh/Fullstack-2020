import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course['name']}</h1>
    </div>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <ul>
        {course.parts.map(part =>
        <li key={part.id}>{part.name} {part.exercises}</li>
          )}
      </ul>
    </div>
  )
}

const Total = ({ course }) => {
  let total = 0
  let i = 0
  
  course.parts.forEach (() => {
    total += course.parts[i].exercises
    i++;
  })

  return(
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    }
  ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))