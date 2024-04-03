import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userProfileReducer } from "../slice/profileSlice";
import { tokenReducer } from "../slice/tokenSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		userProfileDetails: userProfileReducer,
		tokenDetails: tokenReducer,
	}),
);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);