import * as ACTIONS_TYPES from "./actionTypes";

export const SUCCESS = {
  type: ACTIONS_TYPES.SUCCESS,
};

export const failure = {
  type: ACTIONS_TYPES.FAILURE,
};

export const success = () => {
  type: ACTIONS_TYPES.SUCCESS;
};

export const failure = () => {
  type: ACTIONS_TYPES.FAILURE;
};

export const add_profile = (profile) => {
  return {
    type: ACTIONS_TYPES.ADD_PROFILE,
    payload: profile,
  };
};

export const remove_profile = () => {
  return {
    type: ACTIONS_TYPES.REMOVE_PROFILE,
  };
};

export const login_failure = () => {
  return {
    type: ACTIONS_TYPES.LOGIN_FAILURE,
  };
};

export const user_input_change = () => {
  return {
    type: ACTIONS_TYPES.USER_INPUT_CHANGE,
    payload: text,
  };
};

export const user_input_submit = (text) => {
  return {
    type: ACTIONS_TYPES.USER_INPUT_SUBMIT,
    payload: text,
  };
};

export const set_db_profile = (profile) => {
  return {
    type: ACTIONS_TYPES.SET_DB_PROFILE,
    profile: profile,
  };
};

export const remove_db_profile = () => {
  return {
    type: ACTIONS_TYPES.REMOVE_DB_PROFILE,
  };
};

export const set_db_posts = (posts) => {
  return {
    type: ACTIONS_TYPES.FETCH_DB_POSTS,
    payload: posts,
  };
};

export const remove_db_posts = () => {
  return {
    type: ACTIONS_TYPES.REMOVE_DB_POSTS,
  };
};
