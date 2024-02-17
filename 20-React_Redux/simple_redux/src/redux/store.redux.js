import { createStore, combineReducers } from "redux";
import { themeReducer } from "./theme.reducer.js";
import { cartReducer } from "./cart.reducer.js";
import { userREducer } from "./user.reducer.js";

// combine the reducers :
const allReducers = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  user: userREducer,
});

export const store = createStore(allReducers);
