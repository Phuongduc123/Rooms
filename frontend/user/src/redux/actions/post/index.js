/* eslint-disable import/no-anonymous-default-export */
import { GET_HOST_POST_LIST, GET_HOST_POST_LIST_SUCCEED, GET_ROOM_DETAIL, GET_ROOM_DETAIL_SUCCEED } from "./action_type";

export default {
  getHostPostList: () => {
    return {
      type: GET_HOST_POST_LIST,
    };
  },
  getHostPostListSucceed: (postList)=>{
    return {
      type:GET_HOST_POST_LIST_SUCCEED,
      params:{
        postList
      }
    }
  },
  getRoomDetail: (id)=>{
    return {
      type:GET_ROOM_DETAIL,
      params:{
        id
      }
    }
  },
  getRoomDetailSucceed: (data) =>{
    return {
      type:GET_ROOM_DETAIL_SUCCEED,
      params:{
        data
      }
    }
  },
  
};
