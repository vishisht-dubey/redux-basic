import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import counterNameReducer from "./slice/counterName";
import formReducer from "./slice/formSlice";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "redux-persist/lib/storage";
import { counterRTKApi } from "@/fetchApi/counterApi";
const persistConfig = {
  key: "redux-basic",
  storage: AsyncStorage,
  whitelist: ["counter"], // Which reducer of redux you want to store in persistent storage
  // blacklist:["counter"] Which reducer of redux you don't want to store in persistent storage
};
const rootReducer = combineReducers({
  counter: counterReducer,
  changeName: counterNameReducer,
  form: formReducer,
});

const persistData = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistData,
    [counterRTKApi.reducerPath]: counterRTKApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(counterRTKApi.middleware),
});
// export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
