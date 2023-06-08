import answersReducer from "./answers";

import { combineReducers } from "redux";

const allReducer = combineReducers({
  answers: answersReducer,
});
export default allReducer;
