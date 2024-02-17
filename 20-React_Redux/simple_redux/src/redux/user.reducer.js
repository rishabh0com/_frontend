import { UPDATE_USER } from "../redux/actions.redux.js";
// user reducer :
export const userREducer = (state = { userName: "", auth: false }, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
