import React, { useEffect, useState } from 'react'

export interface CounterProps {
  foo?: string
}
type Component = React.FC<CounterProps>
const Counter: Component = (props) => {
  const { foo } = props
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
