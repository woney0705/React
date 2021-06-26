import { createStore } from "redux";

export default createStore(function (state, action) {
  if (state === undefined) {
    console.log(state);
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    console.log(state);
    return { ...state, number: state.number + action.size };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
