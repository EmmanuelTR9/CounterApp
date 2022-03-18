import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addToCounter = () => {
    setCount(count + 1);
  }

  const subtractToCounter = () => {
    setCount(count - 1);
  } 

  const resetCounter = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter App</p>
        <p>{count}</p>
        <p>
          <button type="button" onClick={addToCounter}>
            +1
          </button>
          <button type="button" onClick={resetCounter}>
            Reset
          </button>
          <button type="button" onClick={subtractToCounter}>
            - 1
          </button>
        </p>
        <p>
          React + Vite!
        </p>
      </header>
    </div>
  )
}

export default App
