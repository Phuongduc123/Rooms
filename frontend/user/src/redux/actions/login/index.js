/* eslint-disable import/no-anonymous-default-export */
import { CREATE_SOCKET, POST_TO_LOGIN } from "./action_type";

export default {
  postToLogin: (email,password,setLogged) => {
    return {
      type: POST_TO_LOGIN,
      params: {
        email,
        password,
      },
      setLogged
    };
  },
  createSocket:() =>{
    return {
      type:CREATE_SOCKET,
      
    }
  }
  
};
