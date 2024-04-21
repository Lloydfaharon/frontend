import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import postReducer from './post.reducer';
import loginReducer from './login.reducer';

export default combineReducers({
    userReducer,
    postReducer,
    loginReducer,
});

