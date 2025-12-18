import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import RestaurantHeader from "../RestaurantContent/RestaurantHeader/restaurant-header";
import ReviewForm from "../RestaurantContent/ReviewsSection/ReviewForm/review-form";
import { CartContainer } from "../Cart/cart-list";
import DishReviewLayout from "../RestaurantLayout/dish-review-layout";
import { Outlet } from "react-router";

export const RestaurantContainer = ({ activeRestaurantId }) => {
  const restaurant = useSelector((state) => {
    return selectRestaurantById(state, activeRestaurantId);
  });

  if (!restaurant) return null;

  const { name, reviews } = restaurant;

  return (
    <div className="restaurant-content">
      <CartContainer />
      <RestaurantHeader reviewIds={reviews} name={name} />
      <DishReviewLayout />
      <Outlet />
      <ReviewForm />
    </div>
  );
};
