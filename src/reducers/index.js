import { combineReducers } from "redux";
import usersReducer from "../layout/users/reducers.js";
import {reducer as toastrReducer} from 'react-redux-toastr'


export default combineReducers({
    users: usersReducer,
    toastr: toastrReducer,
})