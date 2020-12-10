/* eslint-disable import/no-anonymous-default-export */
import {  POST_TO_LOGIN} from "../actions/login/action_type";
import {postToLogin} from "../../request";

export default (
  state = {
  },
  action
) => {
  switch (action.type) {
    
    case POST_TO_LOGIN:{
      postToLogin(action.params,action.setLogged)
      return {
        ...state,  
      }
      
    }
    
    default: {
      return { ...state };
    }
  }
};
