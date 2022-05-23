import React, { useState } from "react";
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
let firstSide = [];
let digits = [];

function Main() {
  
  const [Display, setDisplay] = useState("");
  return (
    <>
      <div className="display">
        <h1 className="text-center">{Display}</h1>
      </div>
      <div className="container">
        {nums.map((num, i) => (
          <button
            key={i}
            onClick={() => {
              digits.push(document.getElementById(`id${i}`).innerHTML);
              setDisplay(digits.join(""));
            }}
          >
            <h1 id={"id" + i}>{num}</h1>
          </button>
        ))}
        <button
          disabled={Display.length === 0 ? true : false}
          onClick={(e) => {
            firstSide.push(Display, "+");
            setDisplay(Display + " + ");
            console.log(firstSide);
          }}
        >
          <h1 id="plus">+</h1>
        </button>
        <button
          disabled={Display.length === 0 ? true : false}
          onClick={(e) => {
            firstSide.push(Display, "+");
            setDisplay(Display + " - ");

          }}
        >
          <h1 id="minus">-</h1>
        </button>
        <button
          disabled={Display.length === 0 ? true : false}
          onClick={(e) => {
            setDisplay(Display + " * ");
          }}
        >
          <h1 id="multiply">*</h1>
        </button>
        <button
          disabled={Display.length === 0 ? true : false}
          onClick={(e) => {
            console.log(firstSide);
            setDisplay(Display + " / ");

          }}
        >
          <h1 id="divide">/</h1>
        </button>
      </div>
    </>
  );
}

export default Main;
