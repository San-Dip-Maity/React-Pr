import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const incresefunctions = () => {
    setValue(value + 1);
  };

  const decreasefunctions = () => {
    setValue(value - 1);
  };

  return (
    <div className="App">
      <h1>Counter : {value}</h1>
      <button onClick={incresefunctions}>Increase +</button>
      <button onClick={decreasefunctions}>Decrease -</button>
    </div>
  );
}

export default App;
