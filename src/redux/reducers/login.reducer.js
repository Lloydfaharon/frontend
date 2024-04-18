// login.reducer.js
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/login.actions";

const initialState = {
  isConnected: false,
  token: null,
  error: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isConnected: true,
        token: action.payload,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isConnected: false,
        error: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

