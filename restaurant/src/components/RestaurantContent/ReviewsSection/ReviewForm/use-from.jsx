import { useReducer } from "react";
export const UPDATE_USER_ACTION = "UPDATE_USER_ACTION";
export const UPDATE_COMMENT_ACTION = "UPDATE_COMMENT_ACTION";
export const UPDATE_RATING_ACTION = "UPDATE_RATING_ACTION";
export const CLEAR_ACTION = "CLEAR_ACTION";

const initialState = {
  user: "",
  text: "",
  rating: 0,
};

const formReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER_ACTION:
      return { ...state, user: payload };
    case UPDATE_COMMENT_ACTION:
      return { ...state, text: payload };
    case UPDATE_RATING_ACTION:
      return { ...state, rating: payload };
    case CLEAR_ACTION:
      return initialState;
    default:
      return state;
  }
};

export const useReviewForm = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const { user, text, rating } = formState;

  return {
    user,
    text,
    rating,
    dispatch,
  };
};
