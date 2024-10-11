import './App.css';
import { ClipLoader } from "react-spinners"; // Importing the spinner component 
import Axios from "axios";
import { useState } from "react";
function App() {
  const [excuse, setExcuse] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading
  const generateExcuse = (e) => {
    setLoading(true); // Set loading to true when the request starts
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${e.target.dataset.type}/`)
      .then(res => {
        setExcuse(res.data[0].excuse);
        setLoading(false); // Set loading to false when the data is received
      })
      .catch(() => {
        setLoading(false); // Set loading to false in case of an error
      });
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
      <p className="excuse">{loading ? <ClipLoader size={50} color={"#123abc"} loading={loading} /> : <p className="excuse">{excuse}</p>}</p>
    </div>
  );
}

export default App;
