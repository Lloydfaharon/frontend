import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducers/user.reducer";
import loginReducer from "../reducers/login.reducer";
import postReducer from "../reducers/post.reducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    post: postReducer,
    devTools: true,
  },
});

export default store;
