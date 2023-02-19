import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)
  const [blockOne, setBlockOne] = useState(true)

  return (<>
    <input type="text" />
    <div></div>
    
    </>
  )
}

export default App
