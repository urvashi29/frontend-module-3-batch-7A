import { INC, DEC } from "./actionType";

// central application state
const initState = {
  counter: 0,
  users: [],
};

// reducer is a function, return central application state;
export const reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case INC:
      return { ...state, counter: state.counter + action.payload };
    case DEC:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
