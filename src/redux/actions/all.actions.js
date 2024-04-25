import axios from "axios";

//SIGN IN
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const SHOW_LOGIN_ERROR_MESSAGE = 'SHOW_LOGIN_ERROR_MESSAGE'; // Ajout de la constante pour afficher le message d'erreur

//user profile
export const GET_USERPROFILE = "GET_USERPROFILE";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";

//update username
export const UPDATE_USERNAME_REQUEST = 'UPDATE_USERNAME_REQUEST';
export const UPDATE_USERNAME_SUCCESS = 'UPDATE_USERNAME_SUCCESS';
export const UPDATE_USERNAME_FAIL = 'UPDATE_USERNAME_FAIL';

/* Authentication actions */

export const login = (email, password) => async (dispatch) => {
  if (localStorage.getItem('token')){
    const hasToken = localStorage.getItem('token')
    dispatch({ type: LOGIN_SUCCESS, payload: hasToken });
  }else{
    try {
    
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );
      const token = response.data.body.token;
      console.log(response);
  
      // Stocker le token dans le local storage
      localStorage.setItem("token", token);
  
      dispatch({ type: LOGIN_SUCCESS, payload: token });
    } catch (error) {
      
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  
      // Envoi d'une action pour rendre visible la classe error-message
      dispatch({ type: SHOW_LOGIN_ERROR_MESSAGE });
    }

  }
 
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// Action pour afficher le message d'erreur de connexion
export const showLoginErrorMessage = () => ({
  type: SHOW_LOGIN_ERROR_MESSAGE,
});

// User's profile action
export const userProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found"); // Lance une erreur si aucun token n'est trouvé
    }

    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.data;

    // Récupérer l'ID de l'utilisateur connecté
    const userId = data.body.id;

    // Stocker l'ID de l'utilisateur dans le local storage
    localStorage.setItem("userId", userId);

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/* Username update action */
export const updateUserName = (userName) => async (dispatch) => {
  dispatch({ type: UPDATE_USERNAME_REQUEST });

  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(
      'http://localhost:3001/api/v1/user/profile',
      { userName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: UPDATE_USERNAME_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: UPDATE_USERNAME_FAIL,
      payload: error.response.data.message || 'Failed to update username',
    });
  }
};
