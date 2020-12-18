/* eslint-disable import/no-anonymous-default-export */
import { GET_HOST_POST_LIST_SUCCEED } from "../actions/post/action_type";
import {} from "../../request";

export default (
  state = {
    postListIsConfirmed: [],
    postListIsntConfirmed: [],
  },
  action
) => {
  switch (action.type) {
    case GET_HOST_POST_LIST_SUCCEED: {
      let fakePostListIsConfirmed = [];
      let fakePostListIsntConfirmed = [];
      action.params.postList.map((post) => {
        if (post.is_confirmed === false) {
          fakePostListIsntConfirmed.push(post);
        } else {
          fakePostListIsConfirmed.push(post);
        }
      });
      return {
        ...state,
        postListIsConfirmed: fakePostListIsConfirmed,
        postListIsntConfirmed: fakePostListIsntConfirmed,
      };
    }

    default: {
      return { ...state };
    }
  }
};
