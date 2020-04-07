/* eslint-disable */
import { combineReducers } from "redux";

const initialState = 50;

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;

    case "DECREMENT":
      return state + action.payload;
  }
  // console.log(state)
  return state;
};
const rootReducer = combineReducers({ value: reducer });

export default rootReducer;
