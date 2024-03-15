import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import './layout.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='layout'>
      <Navbar />
    </div>
    </>
  )
}

export default App
