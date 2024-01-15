import { configureStore } from "@reduxjs/toolkit";
import  userReducers from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"

const appStore=configureStore(
    {
        reducer:{
            user:userReducers,
            movies:moviesReducer,
            gpt:gptReducer,
        },
    }
);

export default appStore;