import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)
  const [blockOne, setBlockOne] = useState(true)

  return (<>
    <input type="text" />
    <div className="App">
      <div className='stairs'>

      </div>
      <div className='stairs2'>
      
      </div>
      <div className='stairs3'>
      
      </div>  
      <motion.div className='stairs4'/>
      
      </div>
    
    
    </>
  )
}

export default App
