import { createSlice } from '@reduxjs/toolkit';


const arraySlice = createSlice({
    name: "array",
    initialState: {
        array:[]
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

export const arrayReducer = arraySlice.reducer;