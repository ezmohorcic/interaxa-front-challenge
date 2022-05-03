import { createSlice } from '@reduxjs/toolkit';
import { ERROR_500, LOADING_0, NOT_FOUND_404, SUCCESS_200 } from '../consts';


const arraySlice = createSlice({
    name: "search",
    initialState: {
        array: [],
    },
    reducers: {
        addElement: (state,action) =>
        {
            state.array = [...state.array,action.payload];
        },
        eliminatedElement: (state,action) => {
            state.array = action.payload;
        },
        cleanArr: (state) =>
        {
            state.array = [];
        }
    }
});

export const { 
    addElement, 
    eliminatedElement,
    cleanArr,
} = arraySlice.actions;

export const searchReducer = arraySlice.reducer;