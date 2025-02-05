import * as actions from "./actionTypes";

export const initState = {
  counter: 0,
  users: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.INC:
      return { ...state, counter: state.counter + action.payload };
    case actions.DEC:
      return { ...state, counter: state.counter - action.payload };
    case actions.GET_USERS:
      return { ...state, users: action.payload.httpResponse };
    default:
      return state;
  }
};

export default reducer;
