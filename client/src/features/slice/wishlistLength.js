import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
	name: "wishListLength",
	initialState: {
		length: 0,
	},
	reducers: {
		setWishLength: (state, action) => {
			state.length = action.payload;
		},
		removeWishLength: (state) => {
			state.length = 0;
		},
	},
});

export const { setWishLength, removeWishLength } = wishListSlice.actions;
export const wishLengthReducer = wishListSlice.reducer;
