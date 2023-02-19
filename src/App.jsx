import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [xMove, setXMove] = useState(100)
  const [yMove, setYMove] = useState(0)
  const [blockOne, setBlockOne] = useState(true)

  const handleClick = () => {
    setXMove(xMove + 145)
    setYMove(yMove - 70)
  }

  return (<>
    <button onClick={() => handleClick()}> move mario </button>
    <motion.img animate={{ x: xMove, y: yMove, transition: { duration: 1 } }}  id='mario' src="mario.png" alt="" srcset="" />
    <div className='mainContainer'>
    <input type="text" />
    </div>
    </>
  )
}

export default App
