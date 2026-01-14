import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <>
      <div className='counter-app-wrapper'>
        <h2>COUNTER APP</h2>
        <div className='counter-app-wrapper-inner'>
          <p>{count}</p>
          <div className='counter-btn'>
            <Button text="➕ INCREMENT" func={increment} className='' />
            <Button text="➖ DECREMENT" func={decrement} />
            <Button text="🔄 RESET" func={reset} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
