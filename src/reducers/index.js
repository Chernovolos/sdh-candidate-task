import { combineReducers } from "redux";
import listReducer  from "../layout/users/list/reducer";

export default combineReducers({
    list: listReducer,
})