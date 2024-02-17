import { SET_THEME } from "../redux/actions.redux.js";

export const themeReducer = (state = "light-mode", action) => {

  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};
