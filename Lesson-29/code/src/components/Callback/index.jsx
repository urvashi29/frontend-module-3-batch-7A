import React, { useCallback, useState } from "react";

const functionCount = new Set();

// useCallback: memoizing a function
const index = () => {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(0);

  const incrementCounter = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, [counter]);

  const incrementNum = useCallback(() => {
    setNum((num) => num + 1);
  }, [num]);

  // const handleInc = () => {
  //   setCounter((counter) => counter + 1);
  // };

  // const handleNum = () => {
  //   setNum((num) => num + 1);
  // };

  // functionCount.add(handleInc);
  // functionCount.add(handleNum);

  functionCount.add(incrementCounter);
  functionCount.add(incrementNum);
  console.log(functionCount);

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>+ Counter</button>
      <p>Size: {functionCount.size}</p>
      <p>Num: {num}</p>
      <button onClick={incrementNum}>+ Num</button>
    </>
  );
};

export default index;
