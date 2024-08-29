import './App.css';
import Axios from "axios";
import { useState } from "react";
function App() {
  const [excuse, setExcuse] = useState("");
  let generateExcuse = (e) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${e.target.dataset.type}/`).then(res => setExcuse(res.data[0].excuse));
  }
  return (
    <div className="App">
      <p className="Title">Generate An Excuse For:</p>
      <button data-type={"party"} onClick={generateExcuse}>Party</button>
      <button data-type={"family"} onClick={generateExcuse}>Familly</button>
      <button data-type={"office"} onClick={generateExcuse}>Office</button>
      <button data-type={"children"} onClick={generateExcuse}>Children</button>
      <button data-type={"college"} onClick={generateExcuse}>College</button>
      <button data-type={"funny"} onClick={generateExcuse}>Funny</button>
      <button data-type={"unbelievable"} onClick={generateExcuse}>Unbelievable</button>
      <button data-type={"developers"} onClick={generateExcuse}>Developers</button>
      <p className="excuse">{excuse}</p>
    </div>
  );
}

export default App;
