// login.reducer.js

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/all.actions";

const initialState = {
  isConnected: false,
  token: null,
  error: null,
  displayLoginErrorMessage: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isConnected: true,
        token: action.payload,
        error: null,
        displayLoginErrorMessage: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isConnected: false,
        error: action.payload,
        displayLoginErrorMessage: true,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
