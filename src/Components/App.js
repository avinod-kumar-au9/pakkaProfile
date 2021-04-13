import React, { useState, useRef } from "react";
import "./App.css";

const HighFive = () => {
  const [characters] = useState([
    "R","A","N","D","O","M"
  ]);
  const firstinp = useRef(null);
  const secondinp = useRef(null);
  const thirdinp = useRef(null);
  const fourthinp = useRef(null);
  const fifthinp = useRef(null);

  const charHandler = (char) => {
    let inp1 = firstinp.current.value;
    let inp2 = secondinp.current.value;
    let inp3 = thirdinp.current.value;
    let inp4 = fourthinp.current.value;
    let inp5 = fifthinp.current.value;

    if (inp1.length < 4) {
      firstinp.current.value += char;
    } else if (inp2.length < 5) {
      secondinp.current.value += char;
    } else if (inp3.length < 3) {
      thirdinp.current.value += char;
    } else if (inp4.length < 5) {
      fourthinp.current.value += char;
    } else if (inp5.length < 2) {
      fifthinp.current.value += char;
    }
  };

  return (
    <div>
      {characters.map((char, idx) => (
        <button className="button" key={idx} onClick={() => charHandler(char)}>
          {char}
        </button>
      ))}

      <label className="input">
        <input ref={firstinp} type="text"></input>4
      </label>
      <label className="input">
        <input ref={secondinp} type="text"></input>5
      </label>
      <label className="input">
        <input ref={thirdinp} type="text"></input>3
      </label>
      <label className="input">
        <input ref={fourthinp} type="text"></input>5
      </label>
      <label className="input">
        <input ref={fifthinp} type="text"></input>2
      </label>
    </div>
  );
};

export default HighFive;
