import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../slices/counterSlice";
import {
  useGetUsersQuery,
  useGetUserByIdQuery,
} from "../../slices/UserApiSlice";

const index = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  const response = useGetUsersQuery();
  if (!response.isLoading) {
    console.log(response);
  }

  const responseData = useGetUserByIdQuery(2);
  console.log(responseData);

  return (
    <>
      <button onClick={handleInc}>+</button>
      {counter}
      <button onClick={handleDec}>-</button>
    </>
  );
};

export default index;
