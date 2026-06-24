import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    if (num === "") {
      setResult("❌ Please enter a number");
      return;
    }

    let number = parseInt(num);
    let digits = num.length;
    let temp = number;
    let sum = 0;

    while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, digits);
      temp = Math.floor(temp / 10);
    }

    if (sum === number) {
      setResult(`✔️ ${number} is an Armstrong Number`);
    } else {
      setResult(`❌ ${number} is NOT an Armstrong Number`);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Armstrong Checker</h1>

        <input
          type="number"
          placeholder="Enter number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <button onClick={checkArmstrong}>Check</button>

        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default App;