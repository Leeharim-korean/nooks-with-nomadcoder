import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const sayHello = () => console.log("Hello");
  // useEffect(sayHello, [number]); //has error
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  // useEffect(sayHello, [number]);
  useEffect(sayHello, []);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
