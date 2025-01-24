import React from "react";
import { useDispatch } from "react-redux";
import { onDec } from "../../action";

const index = () => {
  const dispatch = useDispatch();

  const handleDec = () => {
    dispatch(onDec(1));
  };

  return (
    <>
      <button onClick={handleDec}>-</button>
    </>
  );
};

export default index;
