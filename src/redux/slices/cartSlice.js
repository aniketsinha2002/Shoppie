import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Add new item
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // Remove item
    },
    updateQuantity: (state, action) => {
      const { id, increment } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        if (increment) {
          existingItem.quantity += 1; // Increase quantity
        } else if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity
        }
      }
    },
  },
});

export const { addItem, deleteItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
