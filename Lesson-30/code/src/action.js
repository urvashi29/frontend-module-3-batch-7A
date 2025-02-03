import * as actions from "./actionTypes";
import { api } from "./assets/api";
import axios from "axios";

export const onAddEmployee = (emp) => {
  // action object
  return {
    type: actions.ADD_EMPLOYEE,
    payload: emp,
  };
};

export const onDeleteEmployee = (id) => {
  return {
    type: actions.DELETE_EMPLOYEE,
    payload: id,
  };
};

export const onAddUser = () => {
  return (dispatch) => {
    axios
      .post(api, {
        name: "alina",
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(
          //self-invoking function
          ((data) => {
            return {
              type: actions.ADD_USER,
              payload: {
                httpResponse: data,
              },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
