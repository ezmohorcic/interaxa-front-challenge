import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./reducers/searchReducer";
import { arrayReducer } from "./reducers/arrayReducer";
import { detailedReducer } from "./reducers/detailedReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    array: arrayReducer,
    detailed: detailedReducer,
});


export const store = configureStore({
    reducer:rootReducer,
});

