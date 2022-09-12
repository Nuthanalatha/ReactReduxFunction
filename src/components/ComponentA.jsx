//redux is a pattern or library for managing and updating the application state,
//using events called actions it serves as a centralized store for state that needs to
//be used accross your entire your application.

//action:what to do.its is one plane java script object that have one type
//field actions only tell what to do they wont say how to do

//reducer:how to do.it is same as useReducer hook.

//store:which holds the state of the application

//in this store we have function 1>createStore(): how to create
//the store and dispatch(action): how to triger an action
//useSelector is used to build the connection b/w react and redux
//getState(): it is used to get the current state
//"redux is synchronous" "react is not fully synchronous"

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../actiontypes/actiontypes";

const ComponentA = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.reducerFun);

  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  return (
    <div>
      <h1>{myState}</h1>
      <button onClick={increment}>Increment</button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default ComponentA;
