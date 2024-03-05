import { DECREMENT, INCREMENT } from "./actionTypes";

export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return (state += action.payload);
    case DECREMENT:
      return (state -= action.payload);
    default:
      return state;
  }
};
