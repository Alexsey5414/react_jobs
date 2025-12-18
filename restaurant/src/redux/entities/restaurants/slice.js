import { createSlice, createSelector } from "@reduxjs/toolkit";
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
    selectRestaurantEntities: (state) => state.entities,
  },
});

const selectRestaurantSlice = (state) => {
  return state[restaurantSlice.name];
};

export const selectRestaurantValues = createSelector(
  [selectRestaurantSlice],
  (restaurantSlice) => {
    return Object.values(restaurantSlice.entities).map((data) => ({
      ...data,
      route: `/restaurants/${data.id}/dish`,
    }));
  }
);

export const {
  selectRestaurantById,
  selectRestaurantIds,
  selectRestaurantEntities,
} = restaurantSlice.selectors;
