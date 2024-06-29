import { useState } from "react";
import "./App.css";

function App() {
  const [numOne, setNumOne] = useState(0);
  const [operator, setOperator] = useState("+");
  const [numTwo, setNumTwo] = useState(0);
  const [result, setResult] = useState(0);

  function handleRsult() {
    if (operator === "+") {
      setResult(numOne + numTwo);
    } else if(operator ===  '-'){
      setResult(numOne  - numTwo)
    }else if(operator === '/'){
      setResult(numOne / numTwo)
    }else{
      setResult(numOne * numTwo)
    }
  }
  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={() => setNumOne(1)}>1</button>
          <button onClick={() => setNumOne(2)}>2</button>
          <button onClick={() => setNumOne(3)}>3</button>
          <button onClick={() => setNumOne(4)}>4</button>
          <button onClick={() => setNumOne(5)}>5</button>
          <button onClick={() => setNumOne(6)}>6</button>
          <button onClick={() => setNumOne(7)}>7</button>
          <button onClick={() => setNumOne(8)}>8</button>
          <button onClick={() => setNumOne(9)}>9</button>
          <button onClick={() => setNumOne(0)}> 0</button>
          <button onClick={() => setNumOne(0)}>Clear</button>
          <button onClick={() => setNumOne(0)}>.</button>
          

        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={() => setOperator("*")}>*</button>
          <button onClick={() => setOperator("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={() => setNumTwo(1)}>1</button>
          <button onClick={() => setNumTwo(2)}>2</button>
          <button onClick={() => setNumTwo(3)}>3</button>
          <button onClick={() => setNumTwo(4)}>4</button>
          <button onClick={() => setNumTwo(5)}>5</button>
          <button onClick={() => setNumTwo(6)}>6</button>
          <button onClick={() => setNumTwo(7)}>7</button>
          <button onClick={() => setNumTwo(8)}>8</button>
          <button onClick={() => setNumTwo(9)}>9</button>
          <button onClick={() => setNumTwo(0)}> 0</button>
          <button onClick={() => setNumTwo(0)}>Clear</button>
          <button onClick={() => setNumTwo(0)}> 0</button>

        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleRsult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
