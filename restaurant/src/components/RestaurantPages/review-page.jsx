import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import ReviewsSection from "../RestaurantContent/ReviewsSection/review-section";
import { useParams } from "react-router";

export const ReviewPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => {
    return selectRestaurantById(state, restaurantId);
  });

  if (!restaurant) return null;

  const { reviews } = restaurant;

  return <ReviewsSection reviewIds={reviews} />;
};
