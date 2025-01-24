import React from "react";
import { useDispatch } from "react-redux";
import { onInc } from "../../action";

const index = () => {
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(onInc(1)); //it will trigger reducer
  };

  return (
    <>
      <button onClick={handleInc}>+</button>
    </>
  );
};

export default index;
