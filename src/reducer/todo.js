import { ADD_TODO, REMOVE_TODO } from "../action/action-type";
//first we are importing the action type

const initialState = [];
//this is our initial state and it can be object, array, true/false any thing as per our need in this case it is [] because we are storing todos

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

// export default (state = initialState, action) => {
//   //here we re dumping initialState in state so it can use all its properties
//   //and action isn not a world it is comming from redux and it means that what type of action we want to perform
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];

//     case REMOVE_TODO:
//       return state.filter((todo) => todo.id !== action.payload);

//     default:
//       return state;
//   }
// };
