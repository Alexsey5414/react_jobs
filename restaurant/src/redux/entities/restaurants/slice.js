import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../service/normalized-mock";

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantById: (state, id) => {
      return state.entities[id];
    },
    selectRestaurantIds: (state) => state.ids,
  },
});

export const { selectRestaurantById, selectRestaurantIds } =
  restaurantSlice.selectors;
