import { combineReducers } from "redux";
import file from './fileReducer';



const allReducers = combineReducers({
    file,
});

export default allReducers;