import axios from 'axios';


//SIGN IN
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

//user profile
export const GET_USERPROFILE = "GET_USERPROFILE"
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL'
export const USER_PROFILE_RESET = 'USER_PROFILE_RESET'
export const USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE'



/* Authentication actions */

export const login = (email, password) => async (dispatch) => {
  
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
      const token = response.data.body.token;
      console.log(response)

       // Stocker le token dans le local storage
       localStorage.setItem('token',token);

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
export const userProfilef = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

// User's profile action

export const userProfile = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      { token },
      config
    )

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
/* Username update action */
export const updateUsername = (username) => {
    return {
        type: USER_PROFILE_UPDATE,
        payload: username,
    }
}
