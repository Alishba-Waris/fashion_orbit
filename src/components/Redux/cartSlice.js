import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalAmount: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity, size } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity; // If the item already exists, update the quantity
      } else {
        state.items.push({ ...product, quantity, size }); // Add new item to cart
      }

      state.totalAmount += product.price * quantity; // Update total price
    },
    removeFromCart: (state, action) => {
      const { productId, size } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.id === productId && item.size === size
      );
      const item = state.items[itemIndex];

      if (item) {
        state.totalAmount -= item.price * item.quantity; // Adjust total price
        state.items.splice(itemIndex, 1); // Remove item from cart
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
