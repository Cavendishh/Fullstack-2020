import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <h1>Course list</h1>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
    </div>
  )
}

const Content = ({ course }) => {
  return (
    course.parts.map(part => <Part key={part.id} value={part} />)
  )
}

const Part = ({ value }) => {
  return (
    <p>
      {value.name} {value.exercises}
    </p>
  )
}

const Total = ({ course }) => {
  const total = course.parts.map(part => part.exercises).reduce((sum, currentValue) => sum + currentValue)
    
  return(
    <div>
      <p><b>Number of exercises {total}</b></p>
    </div>
  )
}

export default Course
