import { INC, DEC, GET_USERS , ADD_ITEM} from "./actionType";

// central application state
const initState = {
  counter: 0,
  users: [],
  items: [],
};

// reducer is a function, return central application state;
export const reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case INC:
      return { ...state, counter: state.counter + action.payload };
    case DEC:
      return { ...state, counter: state.counter - action.payload };
    case GET_USERS:
      return { ...state, users: action.payload.httpResponse };
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
