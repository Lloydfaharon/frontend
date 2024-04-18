import { combineReducers } from 'redux';
import userReducer from './userSlice';
import postReducer from './postReducer';
import loginReducer from './login.reducer';

export default combineReducers({
    userReducer,
    postReducer,
    loginReducer,
});

