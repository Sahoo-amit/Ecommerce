import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setStoreCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setStoreCart } = cartSlice.actions;
export default cartSlice.reducer;
