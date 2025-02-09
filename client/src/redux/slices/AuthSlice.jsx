import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || "user"
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        storeToken: (state,action)=>{
            localStorage.setItem("token",action.payload)
            state.token = action.payload

        },
        storeUser: (state,action)=>{
            localStorage.setItem("role", action.payload)
            state.role = action.payload
        },
        removeToken: (state)=>{
            localStorage.removeItem("token")
            state.token = null
        },
        removeUser: (state)=>{
            localStorage.removeItem("role")
            state.role = "user"
        }
    }
})

export const {storeToken,removeToken,storeUser,removeUser} = authSlice.actions
export default authSlice.reducer