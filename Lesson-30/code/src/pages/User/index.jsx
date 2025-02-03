import React from "react";
import {useDispatch} from "react-redux";
import { onAddUser } from "../../action";

const index = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(onAddUser());
  };

  return (
    <>
      {/* <form></form> */}
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default index;
