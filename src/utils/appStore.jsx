import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // ⭐ Only persist the user slice
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
  reducer: persistedReducer,

  // ⭐ FIX: Remove warning for non-serializable redux-persist actions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/FLUSH",
        ],
        ignoredPaths: ["_persist"],
      },
    }),
});

export const persistor = persistStore(appStore);
export default appStore;
