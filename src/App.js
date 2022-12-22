import "./App.css";
import { FcCalculator } from "react-icons/fc";
import { useState } from "react"

function App() {
  const [input, setInput] = useState([])
  const [answer, setAns] = useState("")
  const [number, setNum] = useState()




  function vowelsCheck() {
    let array = (input.split(""))
    let update = array.filter(item => item.includes("a") || item.includes("e") || item.includes("u") || item.includes("o"))
    setNum(update.length)
    setAns(update)

  }




  return (

    <div>
      <h1>Vowel Counter App</h1>

      <input type="text" class="input" onChange={(e) => setInput(e.target.value)} /><br />

      <button class="btn" onClick={vowelsCheck}>Calculate</button>
      <p class="answer">{input} has {number} vowels:- {answer}</p>

      <div class="results">
        <center><b>Previous Searchs</b></center>
      </div>
    </div>
  );
}

export default App;
