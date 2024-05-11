import React from "react";
import { useState } from "react";
import './calculator.css';
function Calculator(){

const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="title">React Calculator</div>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '/', '='].map((item, index) => (
          <button key={index} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
      
    </div>
  );
}

export default Calculator;