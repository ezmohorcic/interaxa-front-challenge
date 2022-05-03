import { createSlice } from '@reduxjs/toolkit';
import { ERROR_500, LOADING_0, NOT_FOUND_404, SUCCESS_200 } from '../consts';


const searchSlice = createSlice({
    name: "search",
    initialState: {
        status: LOADING_0,
        info: {},
    },
    reducers: {
        searchSuccess: (state, action) =>{
            state.status = SUCCESS_200;
            state.info = action.payload;
        },
        searchVoid: (state) => {
            state.status = NOT_FOUND_404
        },
        searchFailed: (state) => {
            state.status = ERROR_500
        },
        searchClean: (state) => 
        {
            state.status = LOADING_0;
            state.info = [];
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