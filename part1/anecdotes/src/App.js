import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

export const App = (props) => {
  const iniPoints = Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0);

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(iniPoints) 

  function getRandomInt(min, max) {
    setSelected(Math.floor(Math.random() * (max - min)) + min)
  }

  
  function increaseVote(anecdoteId) {
    const copyPoints = {...points}
    copyPoints[anecdoteId] += 1
    setPoints(copyPoints)
    console.info(points);
    console.info(copyPoints);
  }

  function returnMaxVoteId() {
    let max = 0;
    let idItem = 0;
    for (const point in points) {
      if( points[point] > max ){
        max = points[point]
        idItem = point
      }
    }
    return idItem
  }

  
/*
  console.log(points)
  const max = points.reduce(function(prev, current) {
    return (prev.value > current.value) ? prev : current
  })

  console.log(max)
      
  
*/
   return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button text="Vote this" id="selected" handleClick={() => increaseVote(selected)} />
      <Button text="Next anecdote" handleClick={() => getRandomInt(0, props.anecdotes.length)} />
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[returnMaxVoteId()]}</p>
      <p>has {points[returnMaxVoteId()]} votes</p>
    </div>
  )
}

export default App;
