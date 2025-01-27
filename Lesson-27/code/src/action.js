// action creators-> function
import { INC, DEC, GET_USERS, ADD_ITEM } from "./actionType";
import axios from "axios";
import { userApi } from "./assets/constant";

export const onInc = (value) => {
  return {
    type: INC,
    payload: value,
  };
};

export const onDec = (value) => {
  return {
    type: DEC,
    payload: value,
  };
};

//api
export const onGetUsers = () => {
  return (dispatch) => {
    axios
      .get(userApi)
      .then((res) => {
        dispatch(
          //self-invoking function
          ((data) => {
            return {
              type: GET_USERS,
              payload: {
                httpResponse: data.slice(0, 5),
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

// export const name = () => {
//   return (dispatch) => {
//     axios.post("", data).then((res) => {
//       dispatch(
//         (() => {
//           return {
//             type: "",
//             payload: {

//             }
//           }
//         })(res.data)
//       )
//     }).catch(() => {});
//   }
// }

// self invoking function
// ((a, b) => {
//   console.log(a + b);
// })(10, 20)


export const onAddItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}