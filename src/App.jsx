import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [xMove, setXMove] = useState(100)
  const [yMove, setYMove] = useState(0)
  const [blockOne, setBlockOne] = useState(true)
  let language = " ";
  const handleClick = () => {
    setXMove(xMove + 145)
    setYMove(yMove - 70)
    
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
    <motion.img animate={{ x: xMove, y: yMove, transition: { duration: 1 } }}  id='mario' src="mario.png" alt="" srcset="" />
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
    </div>
    </> 
  )
}

export default App
