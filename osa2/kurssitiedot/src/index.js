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
  course.parts.forEach (value => {
    console.log('hey')
  })

    return (
      <div>
        <Part parts={course.parts} part={0} />
        <Part parts={course.parts} part={1} />
        <Part parts={course.parts} part={2} />
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
  
  course.parts.forEach (exercises => {
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