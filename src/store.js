import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/register/registerSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer
    } 
});
