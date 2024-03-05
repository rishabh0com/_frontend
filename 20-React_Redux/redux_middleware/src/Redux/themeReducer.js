import { CHANGE_THEME } from "./actionTypes";

export const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return (state = action.payload);
    default:
      return state;
  }
};
