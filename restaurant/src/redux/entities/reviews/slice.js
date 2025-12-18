import { createSlice, createSelector } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../service/normalized-mock";

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewById: (state, id) => {
      return state.entities[id];
    },
    selectReviewIds: (state) => state.ids,
    selectReviewEntities: (state) => state.entities,
  },
});

const selectReviewSlice = (state) => {
  return state[reviewSlice.name];
};

export const selectReviewValues = createSelector(
  [selectReviewSlice],
  (reviewSlice) => {
    return Object.values(reviewSlice.entities);
  }
);

export const { selectReviewById, selectReviewIds, selectReviewEntities } =
  reviewSlice.selectors;
