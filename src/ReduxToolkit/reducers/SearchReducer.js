import { createSlice } from '@reduxjs/toolkit';
import { ERROR_500, INVALID_REQUEST, LOADING_0, NOT_FOUND_404, SUCCESS_200 } from '../consts';


const searchSlice = createSlice({
    name: "search",
    initialState: {
        status: LOADING_0,
        results: {},
    },
    reducers: {
        searchSuccess: (state, action) =>{
            console.log(action.payload)
            state.status = action.payload.status;
            state.results = action.payload.results;
        },
        searchVoid: (state) => {
            state.status = INVALID_REQUEST
        },
        searchFailed: (state) => {
            state.status = INVALID_REQUEST
        },
        searchClean: (state) => 
        {
            state.status = LOADING_0;
            state.results = [];
        }
    }
});

export const { 
    searchSuccess, 
    searchVoid,
    searchFailed,
    searchClean
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;