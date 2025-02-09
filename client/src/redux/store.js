import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice";
import cartSlice from "./slices/CartSlice";

export const store = configureStore({
    reducer:{
        auth : authSlice,
        cart : cartSlice
    }
})