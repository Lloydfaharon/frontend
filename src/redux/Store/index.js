import { configureStore,combineReducers } from "@reduxjs/toolkit";

import userReducer  from "../reducers/userReducer";
import loginReducer from "../reducers/login.reducer";

const rootReducer = combineReducers({
   login: loginReducer,
   user: userReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

export default store