import { combineReducers } from "redux";
import ModeReducer from './ModeReducer'
import dateReducer from "./DatePassingReducer";
import selectedDateReducer from "./selectedDateReducer";
import routeReducer from "./authenticateUser";
import fileReducer from './fileCheckReducer'

const AllReducers = combineReducers({
    mode: ModeReducer,
    date: dateReducer,
    selectedDate: selectedDateReducer,
    authenticateUser: routeReducer,
    fileCheck:fileReducer
})
export default AllReducers