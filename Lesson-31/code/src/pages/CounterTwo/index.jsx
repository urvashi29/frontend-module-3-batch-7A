import React, { useState } from "react";

const index = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 data-testid="counter">{counter}</h1>
      <button onClick={() => setCounter(counter + 1)} data-testid="up">
        Up
      </button>
      <button onClick={() => setCounter(counter - 1)} data-testid="down">
        Down
      </button>
    </div>
  );
};

export default index;
