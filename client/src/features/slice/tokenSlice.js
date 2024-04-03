import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
	name: "token",
	initialState: {
		token: "This is token",
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
		removeToken: (state) => {
			state.token = "";
		},
	},
});

export const { setToken, removeToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
