import { createSlice } from '@reduxjs/toolkit';


const arraySlice = createSlice({
    name: "array",
    initialState: [],
    reducers: {
        addElement: (state,action) =>
        {
            state = [...state.array,action.payload];
        },
        eliminatedElement: (state,action) => {
            state = action.payload;
        },
        cleanArr: (state) =>
        {
            state = [];
        }
    }
});

export const { 
    addElement, 
    eliminatedElement,
    cleanArr,
} = arraySlice.actions;

export const arrayReducer = arraySlice.reducer;