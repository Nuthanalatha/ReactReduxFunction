import { combineReducers } from "redux";
import { DECREMENT, INCREMENT } from "../actiontypes/actiontypes";

export const reducerFun = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
const rootReducer = combineReducers({ reducerFun });
export default rootReducer;
