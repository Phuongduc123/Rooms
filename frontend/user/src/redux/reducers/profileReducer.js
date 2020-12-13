/* eslint-disable import/no-anonymous-default-export */
import {
  GET_RENTER_PROFILE,
  PUT_RENTER_UPDATE_PROFILE,
  GET_HOST_PROFILE,
  PUT_HOST_UPDATE_PROFILE,
} from "../actions/profile/action_type";
import {
  getRenterProfile,
  putRenterUpdateProfile,
  getHostProfile,
  putHostUpdateProfile,
} from "../../request";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_RENTER_PROFILE: {
      getRenterProfile(action.setProfile);
      return { ...state };
    }

    case PUT_RENTER_UPDATE_PROFILE: {
      putRenterUpdateProfile(action.params);
      return { ...state };
    }

    case GET_HOST_PROFILE: {
      getHostProfile(action.setProfile);
      return { ...state };
    }

    case PUT_HOST_UPDATE_PROFILE: {
      putHostUpdateProfile(action.params);
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
