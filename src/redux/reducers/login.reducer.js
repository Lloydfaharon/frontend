// login.reducer.js

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SHOW_LOGIN_ERROR_MESSAGE } from "../actions/all.actions";


const initialState = {
  isConnected: false,
  token: null,
  error: null,
  displayLoginErrorMessage: false, // Ajout de la propriété pour contrôler l'affichage du message d'erreur de connexion
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isConnected: true,
        token: action.payload,
        error: null,
        displayLoginErrorMessage: false, // Réinitialisation de l'affichage du message d'erreur de connexion
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isConnected: false,
        error: action.payload,
        displayLoginErrorMessage: true, // Affichage du message d'erreur de connexion
      };
    case LOGOUT:
      return initialState;
    case SHOW_LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        displayLoginErrorMessage: true, // Affichage du message d'erreur de connexion
      };
    default:
      return state;
  }
}


