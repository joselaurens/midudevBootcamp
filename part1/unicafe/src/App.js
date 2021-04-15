import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad
  let average = (good - bad) / total
  let percent = good / total
  if(total > 0) {
    return (
      <table>
        <tbody>
        <Statistic type="good" count={good}/>
        <Statistic type="neutral" count={neutral}/>
        <Statistic type="bad" count={bad}/>
        <Statistic type="total" count={ total }/>
        <Statistic type="average" count={ average }/>
        <Statistic type="percent" count={ percent }/>
        </tbody>
      </table>
    )
  }else{
    return <p>No hay estadísticas todavía</p>
  }
  
}

const Statistic = ({type, count}) => {
  return <tr><td>{type}</td><td>{ count }</td></tr>
}

const Button = ({type, handleClick}) => {
  return <button onClick={handleClick}>{type}</button>
}

export const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Button type="good" handleClick={increaseGood} />
      <Button type="neutral"  handleClick={increaseNeutral} />
      <Button type="bad"  handleClick={increaseBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
