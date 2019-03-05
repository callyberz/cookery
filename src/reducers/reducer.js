// @flow
import { combineReducers } from "redux";
import NavigationStateReducer from "./navigation";
import HomeReducer from "./home";

export default combineReducers({
  navigation: NavigationStateReducer,
  home: HomeReducer
});
