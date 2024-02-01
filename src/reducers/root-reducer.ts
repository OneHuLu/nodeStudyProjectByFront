import { combineReducers } from "redux";
// content Componment
import contentReducer from "../page/content/reducers/index-reducer";
import tourDetailsReducer from "../page/tour-details/reducers/index-reducer";
import accountDetailsReducer from "../page/my-account/reducers/index-reducer";

const rootReducer = combineReducers({
  content: contentReducer,
  tourDetails: tourDetailsReducer,
  myAccount: accountDetailsReducer,
  // 其他的 root reducers
});
export default rootReducer;
