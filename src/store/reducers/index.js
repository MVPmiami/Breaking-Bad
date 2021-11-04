import { combineReducers } from "redux";
import cardListReducer from "./personReducer";
import catalogBtnReducer from "./catalogBtnReducer";
const reducers = combineReducers({
  cardListReducer,
  catalogBtnReducer,
});
export default reducers;
