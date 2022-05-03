import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./reducers/SearchReducer";



const rootReducer = combineReducers({
    search: searchReducer,
});


export const store = configureStore({
    reducer:rootReducer,
});

