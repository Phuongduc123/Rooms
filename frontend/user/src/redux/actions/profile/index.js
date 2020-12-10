/* eslint-disable import/no-anonymous-default-export */
import { GET_RENTER_PROFILE } from "./action_type";

export default {
  getRenterProfile: (setProfile) => {
      console.log("12123")
    return {
      type: GET_RENTER_PROFILE,
      setProfile,
    };
  },
  
};
