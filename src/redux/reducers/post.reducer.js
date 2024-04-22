// user.reducer.js

import {
  UPDATE_USERNAME_REQUEST,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_USERNAME_FAIL,
} from '../actions/all.actions';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case UPDATE_USERNAME_SUCCESS:
      return { ...state, loading: false, success: true };
    case UPDATE_USERNAME_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
