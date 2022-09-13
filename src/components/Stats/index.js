import { useState } from 'react'
import './Stats.css'

const Stats = (props) => {

  let [count, setCount] = useState(0)

  const handleDecrease = () => {
    setCount(count - 1)
  }
  
  function handleIncrease() {
    setCount(count + 1)
  }

  return (
    <div>
      <div className='stats'>
        <h5>{props.campo}</h5>
        <button className='menos' onClick={handleDecrease}>-</button>
        <h6>{count}</h6>
        <button className='mais' onClick={handleIncrease}>+</button>
      </div>
    </div>
  )
}

export default Stats