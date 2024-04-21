import {
  GET_USERPROFILE,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_UPDATE,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
} from "../actions/login.actions";

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
        status: "SUCCEEDED", // Assure-toi de conserver le statut de connexion
        isConnected: true,
        userData: action.payload, // Tu peux conserver les autres données utilisateur si nécessaire
      };

    case USER_PROFILE_UPDATE:
      return {
        ...state,
        success: true, // Peut-être que tu voulais inclure cela dans `userData` ?
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        // Assure-toi de conserver les autres champs de userData si nécessaire
      };

    case USER_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
        status: "FAILED", // Tu pourrais ajouter une indication d'échec de la requête
      };

    case USER_PROFILE_RESET:
      return {
        firstName: null,
        lastName: null,
      };
    default:
      return state;
  }
}
