import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        deleteItem: (state, action) => {
            console.log('Action Payload:', action.payload);
            const indextoDelete = action.payload;
            return state.filter((_, index) => index !== indextoDelete);
        }
    }
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
