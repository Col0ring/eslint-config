import React, { useEffect, useState } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  )
}

export default Counter
