import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "../actions/login.actions"

/* Initial user state */
const initialState = {
    status: 'VOID',
    userData: {}
}

export default function userReducer (state = initialState, action )  {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            }
        case EDIT_USERNAME: 
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    username: action.payload
                } 
            } 
        case LOGOUT: {
            return initialState;  
        }   
        default:
            return state;    
    }
}