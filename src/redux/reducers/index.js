import { combineReducers } from 'redux';
import userReducer from './userSlice';
import postReducer from './postReducer';

export default combineReducers({
    userReducer,
    postReducer,
});

