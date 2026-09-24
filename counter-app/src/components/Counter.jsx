import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(50)

  function handleIncrement() {
    setCount((prev) => prev + 1)
  }

  function handleDecrement() {
    setCount((prev) => prev - 1)
  }

  function handleIncrementBy5() {
    setCount((prev) => prev + 5)
  }

  
  function handleDecrementBy5() {
    setCount((prev) => prev - 5)
  }

  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>Increment (+1)</button>
      <button onClick={handleDecrement}>Decrement (-1)</button>
      <button onClick={handleIncrementBy5}>Increment by 5 (+5)</button>
      <button onClick={handleDecrementBy5}>Decrement by 5 (-5)</button>
      <button onClick={() => setCount(50)}>Reset</button>
    </>
  )
}

export default Counter