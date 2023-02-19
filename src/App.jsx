import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [xMove, setXMove] = useState(5)
  const [yMove, setYMove] = useState(10)
  const [blockOne, setBlockOne] = useState(true)

  const handleClick = () => {
    setXMove(xMove + 12.5)
    setYMove(yMove + 10.5)
  }

  return (<>
  <div className='mainContainer'>
    <button className='marioButton' onClick={() => handleClick()}> move mario</button>
    <motion.img id='mario' src="mario.png" alt="mario" style={{bottom:0 , left:`${xMove}vw`, bottom:`${yMove}vh` }}/>
      <div className='stairsContainer'>
        <div className='stair'></div>
        <div className='stair'></div>
        <div className='stair'></div>
        <div className='stair'></div>
        <div className='stair'></div>
        <div className='stair'></div>
        <div className='stair'></div>
        <div className='stair'></div>
      </div>
    </div>
    </>
  )
}

export default App
