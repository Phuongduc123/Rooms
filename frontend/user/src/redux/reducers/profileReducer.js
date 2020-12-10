/* eslint-disable import/no-anonymous-default-export */
import { GET_RENTER_PROFILE } from "../actions/profile/action_type";
import { getRenterProfile} from "../../request";

export default (
  state = {
  },
  action
) => {
  switch (action.type) {
    case GET_RENTER_PROFILE:{
      getRenterProfile(action.setProfile);  
      return { ...state};
    }
    
    default: {
      return { ...state };
    }
  }
};
