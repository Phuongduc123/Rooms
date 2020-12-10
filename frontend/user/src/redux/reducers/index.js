import { combineReducers } from "redux";
import signup from './signupReducer';
import login from "./loginReducer";
import profile from "./profileReducer";



const allReducers = combineReducers({
    signup,
    login,
    profile
});

export default allReducers;