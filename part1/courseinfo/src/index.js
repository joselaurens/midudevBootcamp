import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>  <h1>{props.course}</h1>

const Content = ({parts}) => {
  return (
    <div>
      {parts.map( (itemPart, item) => ( 
        <Part key={item} part={itemPart.name} exercise={itemPart.exercises} />
      )) }
    </div>
  )
}

const Part = ({part, exercise}) => (<p>{part} {exercise}</p>)  


const Total = ({parts}) => {
  let suma = 0
  parts.map( (itemPart) => ( 
    suma = suma + itemPart.exercises
  ))
  
  return(
    <p>Number of exercises {suma}</p>    
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
