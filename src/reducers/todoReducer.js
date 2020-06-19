import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../constants";

export const todoReducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO: 
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
            return {
                ...todo,
                completed: !todo.completed,
            };
        }
        return todo;
    })
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload)  
    default: return state;
  }
};