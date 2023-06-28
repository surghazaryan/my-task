import React, { useReducer } from "react";

const initalstate = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count !== 0 ? state.count - 1 : state.count = 0 };
    case "reset":
      return { count: 0 };
  }
}

export default function IndexuseReducer() {
  const [state, dispatch] = useReducer(reducer, initalstate);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "plus" });
        }}
      >
        +
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "minus" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </div>
  );
}
