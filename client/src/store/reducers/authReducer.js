import * as ACTIONS_TYPES from "../actions/actionTypes";

export const initialState = {
  is_authenticated: false,
  db_profile: null,
  profile: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        is_authenticated: true,
      };
    case ACTIONS_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        is_authenticated: false,
      };
    case ACTIONS_TYPES.ADD_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case ACTIONS_TYPES.REMOVE_PROFILE:
      return {
        ...state,
        profile: null,
      };
    case ACTIONS_TYPES.SET_DB_PROFILE:
      return {
        ...state,
        db_profile: action.payload,
      };
    case ACTIONS_TYPES.REMOVE_DB_PROFILE:
      return {
        ...state,
        db_profile: null,
      };
    default:
      return state;
  }
};
