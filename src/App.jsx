import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [xMove, setXMove] = useState(5)
  const [yMove, setYMove] = useState(7)
  const [blockOne, setBlockOne] = useState(true)
  let language = " ";
  const handleClick = () => {

    setXMove(xMove + 12.5)
    setYMove(yMove + 10.5)
  }

  let translateFrom = "en";

  let userInput, outputDisplayTextBox;

  let translateForm = document.getElementById("translate-form");

  translateForm.addEventListener("submit", (event) => {
      event.preventDefault();
      userInput = document.getElementById("user-input").value;
      console.dir(userInput);

      let list = document.querySelector("#input-language");
      language = list.value;
      console.log(language);
      let translateTo = language;


      let apiUrl = `https://api.mymemory.translated.net/get?q=${userInput}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
          .then(res => {
              if (!res.ok) {
                  throw Error(res.statusText);
              } return (res.json())
          })
          .then(data => {
              console.log(data);
              console.log(data.responseData.translatedText);
              outputDisplayTextBox = document.getElementById("output-display");
              outputDisplayTextBox.value = data.responseData.translatedText;
          })
  });
  
  return (<>

  <div className='mainContainer'>
    <form id="translate-form">
     
      <textarea id="user-input" placeholder='Word'></textarea>
      <textarea disable id="output-display" placeholder='User Guess' ></textarea>
      <button onClick={()=> handleClick()}id="submit">Submit</button>
      
    </form>
    <select id="input-language">
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      <option value="ja">Japanese</option>
      <option value="hi">Hindi</option>
      <option value="ru">Russian</option>
    </select>
    <motion.img id='mario' src="mario.png" alt="mario" style={{left:`${xMove}vw`, bottom:`${yMove}vh` }}/>
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
