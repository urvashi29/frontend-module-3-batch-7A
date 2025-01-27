import React from "react";
import Counter from "../../components/Counter";
import CounterTwo from "../../components/CounterTwo";
import { useSelector } from "react-redux";
import User from "../../components/User";
import Form from "../../components/Form";

const index = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <Counter />
      Counter: {counter}
      <CounterTwo />
      <User />
      <Form />
    </>
  );
};

export default index;
