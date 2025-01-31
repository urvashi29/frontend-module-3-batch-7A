import React, { useMemo, useState } from "react";

// useMemo (caching state value, memoize the state variable)
const index = () => {
  const [num, setNum] = useState(0);
  const [counter, setCounter] = useState(0);

  // using useMemo()
  const squaredNum = useMemo(() => {
    return squareNum(num);
  }, [num]);

  // without useMemo()
  // const squaredNum = squareNum(num);

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Please enter number"
        value={num}
        onChange={handleChange}
      />
      <h2>{squaredNum}</h2>

      <div style={{ color: "orange" }}>{counter}</div>
      <button onClick={handleInc}>+</button>
    </>
  );
};

function squareNum(num) {
  console.log(num);
  return num * num;
}

export default index;
