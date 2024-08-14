import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    discount: 0, // To manage discount if needed
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increment
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item
      }
      state.total = calculateTotal(state.items); // Update total
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // Remove item
      state.total = calculateTotal(state.items); // Update total
    },
    updateQuantity: (state, action) => {
      const { id, increment } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (increment) {
          existingItem.quantity += 1; // Increase quantity
        } else if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity
        }
      }
      state.total = calculateTotal(state.items); // Update total
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload; // Set discount value
      state.total = calculateTotal(state.items, state.discount); // Update total with discount
    },
    clearCart: (state) => {
      state.items = []; // Clear items
      state.total = 0; // Reset total
      state.discount = 0; // Reset discount
    },
  },
});

// Helper function to calculate total
const calculateTotal = (items, discount = 0) => {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * discount; // Apply discount
  return subtotal - discountAmount + 30; // Add shipping cost of $30
};

export const { addItem, deleteItem, updateQuantity, applyDiscount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
