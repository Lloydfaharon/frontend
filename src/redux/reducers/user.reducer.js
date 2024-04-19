import {
  GET_USERPROFILE,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_UPDATE,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET
} from "../actions/login.actions";

/* Initial user state */
const initialState = {
  status: "VOID",
  userData: {},
  firstName: '',
  lastName: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERPROFILE:
      return {
        ...state,
        status: "SUCCEEDED",
        userData: action.payload,
      };
    case USER_PROFILE_SUCCESS:
      return {
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
      };
    case USER_PROFILE_UPDATE:
      return {
        success: true,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
      };
    case USER_PROFILE_FAIL:
      return { error: action.payload };
    case USER_PROFILE_RESET:
      return {
        firstName: null,
        lastName: null,
      };
    default:
      return state;
  }
}
