import {
  GET_USERPROFILE,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
 
} from "../actions/all.actions";

/* Initial user state */
const initialState = {
  status: "VOID",
  isConnected: false,
  userData: {},
  firstName: "",
  lastName: "",
  userName: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERPROFILE:
      return {
        ...state,
        isConnected: true,
        status: "SUCCEEDED",
        userData: action.payload,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        userName: action.payload.body.userName,
        status: "SUCCEEDED", 
        isConnected: true,
        userData: action.payload, 
      };
    case USER_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
        status: "FAILED", 
      };
    default:
      return state;
  }
}
