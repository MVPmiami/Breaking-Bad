import { combineReducers } from "redux";
import cardListReducer from "./personReducer";
const reducers = combineReducers({
  cardListReducer,
});
export default reducers;
