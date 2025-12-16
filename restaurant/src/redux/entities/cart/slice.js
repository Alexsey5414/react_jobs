import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    deleteFromCart: (state, { payload }) => {
      if (!state[payload]) return state;

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) delete state[payload];
    },
  },
  selectors: {
    selectAmountByItemId: (state, id) => state[id],
  },
});

const selectCardSlice = (state) => {
  return state[cartSlice.name];
};

export const selectCartItemsIds = createSelector(
  [selectCardSlice],
  (cartSlice) => {
    return Object.keys(cartSlice);
  }
);

export const { selectAmountByItemId } = cartSlice.selectors;
export const { addToCart, deleteFromCart } = cartSlice.actions;
