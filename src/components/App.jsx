import React, { useState } from "react";

function App() {
  var [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1); //using count++, we have to click the button twice to increment by 1
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
