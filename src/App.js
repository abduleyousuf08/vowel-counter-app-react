import "./App.css";
import { FcCalculator } from "react-icons/fc";
import { useState } from "react"

function App() {
  const [input, setInput] = useState([])
  const [answer, setAns] = useState("")
  const [number, setNum] = useState()
  const [prev, setPrev] = useState([])





  function vowelsCheck() {
    let array = (input.split(""))
    let update = array.filter((item, index) => item === ("a") || item === ("i") || item === ("e") || item === ("u") || item === ("o"))
    let newUpdate = update.filter((item2, index) => update.indexOf(item2) === index)
    setAns(newUpdate)
    setNum(newUpdate.length)
    let namesPrev = prev.concat(input)
    setPrev(namesPrev)
  }




  return (

    <div>
      <h1>Vowel Counter App</h1>

      <input type="text" class="input" onChange={(e) => setInput(e.target.value)} /><br />

      <button class="btn" onClick={vowelsCheck}>Calculate</button>
      <p class="answer">{input} has {number} vowels:- {answer}</p>

      <div class="results">
        {prev.map((e) => <center><b> {e}</b></center>)}
      </div>
    </div>
  );
}

export default App;
