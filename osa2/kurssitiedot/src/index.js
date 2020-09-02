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
  console.log(course.parts.length)
  const copy = []
  console.log('Debuggaus', copy)
  let i = 0

  course.parts.forEach (value => {
    copy.push(<Part parts={course.parts} part={i} />)
    i++;
  })

  console.log('Debuggaus concat jälkeen: ', copy)

    return (
      <div>
        {copy}
      </div>
    )
}

const Part = ({ parts, part  }) => {
  
  return (
    <div>
      <p>
        {parts[part]['name']} {parts[part]['exercises']}
      </p>
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
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
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