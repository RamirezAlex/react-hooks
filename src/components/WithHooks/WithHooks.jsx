import React, { useState } from 'react'

const WithHooks = (props) => {
  const [counter, setCounter] = useState(0)

  const incrementCount = () => {
    setCounter(counter + 1)
    props.setColor(counter % 4)
  }

  return (
    <tr>
      <td>{props.name}: { counter }</td>
      <td><button onClick={incrementCount}>Increment</button></td>
    </tr>
  )
}

export default WithHooks
