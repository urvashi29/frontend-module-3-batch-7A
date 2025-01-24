import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer";

// mutiple reducers
// const reducers = combineReducers(reducer, movierReducer, productReducer)

export const store = createStore(reducer);
