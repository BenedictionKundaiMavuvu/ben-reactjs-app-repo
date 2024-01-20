import React, { useState, useReducer } from "react";

const myReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLETEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const MyUseReducer = () => {
  const [state, dispatch] = useReducer(myReducer, {
    count: 0,
    showText: false,
  });
  return (
    <div>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLETEXT" });
        }}
      >
        Click Me
      </button>
      {state.showText && <h2>This is a hidden text</h2>}
    </div>
  );
};

export default MyUseReducer;
