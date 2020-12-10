import { combineReducers } from "redux";
import signup from './signupReducer';
import login from "./loginReducer";



const allReducers = combineReducers({
    signup,
    login
});

export default allReducers;