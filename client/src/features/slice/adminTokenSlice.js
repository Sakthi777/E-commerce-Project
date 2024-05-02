import { createSlice } from "@reduxjs/toolkit";

const adminToken = createSlice({
    name:"adminToken",
    initialState:{
        adminToken:""
    },
    reducers:{
        setAdminToken: (state, action)=>{
            state.adminToken = action.payload;
        },
        removeAdminToken:(state)=>{
            state.adminToken = "";
        }
    }
})

export const {setAdminToken, removeAdminToken} = adminToken.actions;
export const adminTokenReducer = adminToken.reducer;