
import React from "react";
import {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div>
    <p>Enter your name:</p>
      <input type="text" id="inp" onChange={(e) => setValue(e.target.value)} />
      {value.length != 0 && <p>Hello {value}!</p>}
    </div>
  )
}

export default App
