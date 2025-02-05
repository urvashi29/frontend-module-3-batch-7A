import * as actions from "./actionTypes";
import axios from "axios";

export const onInc = () => {
  return { type: actions.INC, payload: 1 };
};

export const onDec = () => {
  return { type: actions.DEC, payload: 1 };
};


export const onGetUsers = () => {
  return (dispatch) => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.GET_USERS,
              payload: {
                httpResponse: data.slice(0, 10),
              },
            };
          })(res.data)
        );
      });
    } catch (err) {
      console.log(err);
    }
  };
};
