import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./CartSlice";
import userReducer from './UserSlice';

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer, 
  },
});

export default Store;
