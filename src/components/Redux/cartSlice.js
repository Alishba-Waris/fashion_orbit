import { createSlice } from "@reduxjs/toolkit";

const savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const savedTotalAmount = JSON.parse(localStorage.getItem("totalAmount")) || 0;

const initialState = {
  items: savedItems,
  totalAmount: savedTotalAmount,
};

const saveCartToLocalStorage = (items, totalAmount) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};

const cartSlice = createSlice({
  name: "cart",
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
      saveCartToLocalStorage(state.items, state.totalAmount);
    },

    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.productId &&
          item.size === action.payload.size
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) =>
              !(
                item.id === action.payload.productId &&
                item.size === action.payload.size
              )
          );
        }
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      saveCartToLocalStorage(state.items, state.totalAmount);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalAmount");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
