import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    setCounter((prev) => prev + 1);
    console.log(counter); //
  };

  const handleDec = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={handleInc}>+</button>
      <p>Counter: {counter}</p>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default Counter;
