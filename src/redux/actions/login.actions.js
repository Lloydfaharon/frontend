import axios from 'axios';


//SIGN IN
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

//user profile
export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_USERNAME = "EDIT_USERNAME"



/* Authentication actions */

export const login = (email, password) => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
      const token = response.data.token;
      console.log(token)

       // Stocker le token dans le local storage
       sessionStorage.setItem('token',token);

      dispatch({ type: LOGIN_SUCCESS, payload: token });
    } catch (error) {
        
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };
  
  export const logout = () => {
    return {
      type: LOGOUT,
    };
  };


/* User data recovery action */
export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

/* Username update action */
export const updateUsername = (username) => {
    return {
        type: EDIT_USERNAME,
        payload: username,
    }
}
