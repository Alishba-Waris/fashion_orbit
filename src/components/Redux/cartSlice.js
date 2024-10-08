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
        existingItem.quantity += quantity; 
      } else {
        state.items.push({ ...product, quantity, size }); 
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
        const existingItem = state.items.find(
          (item) => item.id === action.payload.productId && item.size === action.payload.size
        );
      
        if (existingItem) {
          if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
          } else {
            state.items = state.items.filter(
              (item) => !(item.id === action.payload.productId && item.size === action.payload.size)
            );
          }
        }
       state.totalAmount = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});



export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
