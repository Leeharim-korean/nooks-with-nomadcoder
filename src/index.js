import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 3);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>lalalalala I have control</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
