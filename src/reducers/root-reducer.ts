import { combineReducers } from "redux";
// content Componment
import contentReducer from "../page/content/reducers/index-reducer";

const rootReducer = combineReducers({
  content: contentReducer,
  // 其他的 root reducers
});
export default rootReducer;
