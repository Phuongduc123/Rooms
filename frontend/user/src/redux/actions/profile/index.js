/* eslint-disable import/no-anonymous-default-export */
import { GET_RENTER_PROFILE,PUT_RENTER_UPDATE_PROFILE,GET_HOST_PROFILE,PUT_HOST_UPDATE_PROFILE } from "./action_type";

export default {
  getRenterProfile: (setProfile) => {
    return {
      type: GET_RENTER_PROFILE,
      setProfile,
    };
  },
  putRenterUpdateProfile:(fullname,interested_area)=>{
    return {
      type: PUT_RENTER_UPDATE_PROFILE,
      params:{
        fullname,
        interested_area
      }
    }
  },
  getHostProfile:(setProfile)=>{
    return{
      type: GET_HOST_PROFILE,
      setProfile
    }
  },
  putHostUpdateProfile:(fullname,identication,address,phoneNumber)=>{
    return {
      type: PUT_HOST_UPDATE_PROFILE,
      params:{
        fullname,
        identication,
        address,
        phoneNumber
      }
    }
  },
  
};
