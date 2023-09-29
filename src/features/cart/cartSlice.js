import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      clothId: "1",
      name: "Female Habesha Kemis",
      label: "Women",
      imageUrl:
        "https://i.pinimg.com/564x/8a/10/85/8a1085beaeebe10277eae34f3acb2b38.jpg",
      price: "$12",
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { clothId, name, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === clothId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        existingItem.push({ id, name, price, quantity: 1 });
      }
      state.totalItem += 1;
    },
    deleteItem: () => {},
    increaseItemQuantity: () => {},
    decreaseItemQuantity: () => {},
    clearCart: () => {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
