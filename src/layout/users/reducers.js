import { combineReducers } from "redux";
import listReducer from "./list/reducer.js";
import userDetails from "./details/reducer";
import userEdit from "./edit/reducer";

export default combineReducers({
    list: listReducer,
    details: userDetails,
    edit: userEdit
})