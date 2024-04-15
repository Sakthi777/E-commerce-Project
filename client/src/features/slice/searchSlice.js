import { createSlice } from "@reduxjs/toolkit";

const serachSlice = createSlice({
	name: "search",
	initialState: {
		search: "",
	},
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload;
		},
	},
});

export const { setSearch } = serachSlice.actions;
export const searchReducer = serachSlice.reducer;
