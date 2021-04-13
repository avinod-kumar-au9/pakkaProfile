import React, { useState } from "react";
import "./App.css";

const array = ["hey", "hello", "good", "awesome", "cool"];

const HighFive = () => {
  const [state, setstate] = useState({
    inputidx: "",
    err1: "",
  });

  const inputHandler = (e, idx) => {
    const filteredArray = array.filter((item) => item === e.target.value);

    if (filteredArray.length === 0) {
      setstate({
        ...state,
        inputidx: idx,
        err: "not matched",
      });
    } else {
      setstate({
        ...state,
        inputidx: idx,
        err: "matched",
      });
    }
  };

  const { inputidx, err } = state;
  console.log(inputidx);
  return (
    <div>
      {array.map((item, idx) => {
        return (
          <>
            <label className="input">
              <input onChange={(e) => inputHandler(e, idx)} key={idx} />
              {idx === inputidx && err}
            </label>
          </>
        );
      })}
    </div>
  );
};

export default HighFive;
