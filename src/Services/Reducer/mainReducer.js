import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";

const mainReducer = combineReducers({
    employeeReducer
})

export default mainReducer