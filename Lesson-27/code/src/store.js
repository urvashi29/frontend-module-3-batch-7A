import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { thunk } from "redux-thunk";

// mutiple reducers
// const reducers = combineReducers(reducer, movierReducer, productReducer)

export const store = createStore(reducer, applyMiddleware(thunk));
