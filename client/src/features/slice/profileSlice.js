import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "userdetails",
	initialState: {
		profileData: {
			profile: {
				profilePicture: "",
				email: "",
				name: "",
			},
		},
	},
	reducers: {
		loggedIn: (state, action) => {
			state.profileData = action.payload;
		},
		loggedOut: (state) => {
			state.profileData = {
				token: "",
				profile: {
					profilePicture: "",
					email: "",
					name: "",
				},
			};
		},
	},
});

export const { loggedIn, loggedOut } = userSlice.actions;
export const userProfileReducer = userSlice.reducer;
