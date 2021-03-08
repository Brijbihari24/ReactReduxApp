//important we re using pure redux here
import { createStore, combineReducers } from "redux";

import todos from "./reducer/todo";

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer)

export default store;

// import { createStore, combineReducers } from "redux";

// import todos from "./reducer/todo";

// const rootReducer = combineReducers({
//   todos,
// });

// const store = createStore(rootReducer);

// export default store;
