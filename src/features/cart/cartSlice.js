// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Retrieve cart items from local storage or use an empty array if none exists
const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const initialState = {
  cart: storedCartItems,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      newItem.totalPrice = newItem.price * newItem.quantity;
      state.cart.push(newItem);
      // Update local storage whenever the cart items change
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      // Update local storage whenever the cart items change
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.price * item.quantity;
      // Update local storage whenever the cart items change
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) cartSlice.caseReducers.deleteItem(state, action);
      item.quantity--;
      item.totalPrice = item.price * item.quantity;
      // Update local storage whenever the cart items change
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      // Update local storage whenever the cart items change
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export default cartSlice.reducer;
