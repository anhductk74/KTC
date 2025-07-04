import React from 'react'


export default function ButtonClickCounter() {
    const [counter, setCounter] = React.useState(0)

    const handleClickCounter=()=>{
        setCounter((prev)=> prev+1)
    }
  return (
    <div>
        <h1>Exercise 1: Button Click Counter</h1>
        <div>Counter: {counter}</div>
        <button onClick={handleClickCounter}>Click me!</button>
        <div>Clicked: {counter} times</div>
    </div>
    
  )
}