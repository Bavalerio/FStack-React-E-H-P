import * as ACTION_TYPES from "../actions/actionTypes";

export const initialState = {
  posts: null,
};

export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DB_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ACTION_TYPES.REMOVE_DB_POSTS:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
};
