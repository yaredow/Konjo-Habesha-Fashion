import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import accountReducer from './features/account/accountSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: accountReducer,
  },
});

export default store;
