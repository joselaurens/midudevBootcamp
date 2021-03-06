import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) =>  <h1>{course}</h1>

const Content = (props) => {
  const {part} = props
  let exercise = props.exercise
  return <p>{part} {exercise}</p>
}

const Total = ({sum}) => {
  const suma = sum.reduce((prev, next) => prev + next, 0);
  return(
    <p>Number of exercises {suma}</p>    
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total sum={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
