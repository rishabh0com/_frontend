import { createStore, combineReducers, applyMiddleware } from "redux";
import { countReducer } from "./countReducer";
import { themeReducer } from "./themeReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  count: countReducer,
  theme: themeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
