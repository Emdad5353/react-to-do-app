import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist';
import {todoSlice} from "./Slicers/todoSlice";

const rootReducer = combineReducers({
  todo: todoSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer
})

export default store