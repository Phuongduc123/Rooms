import { GET_FILE,GET_FILE_TO_REDUX,GET_FILE_FROM_POST_TO_REDUX,GET_SEARCH_FILE, SET_CHAT,GET_POST_BY_AMOUNT_TO_REDUX} from "../actions/file/action_type";
import file from "../actions/file";

export default (
  state = {
    file:[],
    fileFromPost:[],
    searchFile:[],
    chat:[]
  },
  action
) => {
  switch (action.type) {
    
    case GET_FILE_TO_REDUX:{
      
      return {
        ...state,
        file:action.params.file  
      }
      
    }
    case GET_FILE_FROM_POST_TO_REDUX:{
      return {
        ...state,
        fileFromPost:action.params.file
      }
    }

    case GET_POST_BY_AMOUNT_TO_REDUX:{
      return {
        ...state,
        fileFromPost:action.params.file
      }
    }
    case GET_SEARCH_FILE:{
      return {
        ...state,
        fileFromPost:action.params.file
      }
    }
    case SET_CHAT:{
      return {
        ...state,
        chat:[...state.chat,action.params.chat]
      }
    }
    
    default: {
      return { ...state };
    }
  }
};
