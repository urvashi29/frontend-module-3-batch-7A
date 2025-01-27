import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onGetUsers } from "../../action";

const index = () => {
  const users = useSelector((state) => state.users);
  console.log(users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetUsers());
  }, []);

  //list: dispalying data in ordered format (e.g. array of object)
  const userList = users.length ? (
    users.map((user) => {
      return <p>{user.name}</p>;
    })
  ) : (
    <p>No Post Yet!</p>
  );

  return <>{userList}</>;
};

export default index;
