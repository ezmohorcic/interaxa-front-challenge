import { createSlice } from '@reduxjs/toolkit';


const detailedSlice = createSlice({
    name: "detailed",
    initialState: {},
    reducers: {
        setDetailed: (state,action) =>
        {
            state = action.payload;
        },
        clearDetailed: (state) =>
        {
            state = {};
        }
    }
});

export const { 
    setDetailed, 
    clearDetailed,
} = detailedSlice.actions;

export const detailedReducer = detailedSlice.reducer;