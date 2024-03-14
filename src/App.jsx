import { useState } from 'react'
import './App.css'
import './layout.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='layout'>Hello World!</h1>
    </>
  )
}

export default App
