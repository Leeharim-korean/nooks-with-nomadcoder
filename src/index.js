import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initalValue, validators) => {
  const [value, setValue] = useState(initalValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = [];
    validators.forEach((v, i) => (willUpdate[i] = true));
    validators.forEach((v, i) => {
      if (typeof validators[i] === "function") {
        willUpdate[i] = validators[i](value);
      }
    });
    if (willUpdate.every((v) => v === true)) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const invalid = (value) => !value.includes("@");
  const isTrue = true;
  const name = useInput("Mr.", [maxLen, invalid, isTrue]);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
