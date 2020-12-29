/* eslint-disable import/no-anonymous-default-export */
import {  CREATE_SOCKET, LOGOUT, POST_TO_LOGIN, POST_TO_LOGIN_SUCCESS} from "../actions/login/action_type";
import {postToLogin} from "../../request";

export default (
  state = {
    logged:false,
    websocket:"",
  },
  action
) => {
  switch (action.type) {
    
    case POST_TO_LOGIN_SUCCESS:{
      console.log("success")
      return {
        ...state,
        logged:!state.logged
      }
      
    }

    case LOGOUT:{
      return {
        ...state,
        logged:!state.logged
      }
      
    }

    case CREATE_SOCKET:{
      return {
        ...state,
        websocket:`http://127.0.0.1:8000/messages/${localStorage.getItem("Rooms_username")}/thao`
      }
    }
    
    default: {
      return { ...state };
    }
  }
};
