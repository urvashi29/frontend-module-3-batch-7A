import React from "react";
import Counter from "../../components/Counter";
import CounterTwo from "../../components/CounterTwo";
import { useSelector } from "react-redux";

const index = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <Counter />
      Counter: {counter}
      <CounterTwo />
    </>
  );
};

export default index;
