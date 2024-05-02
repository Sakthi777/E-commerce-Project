import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userProfileReducer } from "../slice/profileSlice";
import { searchProductsReducer } from "../slice/searchProductSlice";
import { tokenReducer } from "../slice/tokenSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { searchValReducer } from "../slice/searchSlice";
import { wishlistReducer } from "../slice/wishListSlice";
import { adminTokenReducer } from "../slice/adminTokenSlice";
const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		userProfileDetails: userProfileReducer,
		tokenDetails: tokenReducer,
		adminTokenDetails:adminTokenReducer,
		searchVal: searchValReducer,
		wishlist: wishlistReducer,
		searchProductDetails: searchProductsReducer,
	}),
);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
