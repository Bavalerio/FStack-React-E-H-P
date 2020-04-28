import * as ACTION_TYPES from "../actions/actionTypes";

export const initialState = {
  userTextChange: "",
  userTextSubmit: "",
};

export const FormReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_INPUT_CHANGE:
      return {
        ...state,
        userTextChange: action.payload,
      };
    case ACTION_TYPES.USER_INPUT_SUBMIT:
      return {
        ...state,
        userTextSubmit: action.payload,
      };
    default:
      throw new Error();
  }
};
