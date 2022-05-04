import { createSlice } from '@reduxjs/toolkit';

export const coordFilter = (lat,lng) => (element) => element.lat===lat && element.lng===lng;
export const coordInvFilter = (lat,lng) => (element) => element.lat!==lat || element.lng!==lng;

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
        eliminatedElement: (state,{ payload }) => 
        {
            const arrayFilter= coordInvFilter(payload.lat,payload.lng);
            state.array = state.array.filter(arrayFilter);
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