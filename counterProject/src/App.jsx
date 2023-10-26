import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  // this will not update the counter in UI 
  // let counter = 0;

  const addValue = () => {
    if(counter < 20){
      setCounter(counter+1);
    }
    console.log("value added ", counter);
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
    console.log("value removed", counter);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value </button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
