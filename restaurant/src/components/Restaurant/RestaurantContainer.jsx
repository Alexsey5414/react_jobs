import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import RestaurantHeader from "../RestaurantContent/RestaurantHeader/restaurant-header";
import DishSection from "../RestaurantContent/DishSection/dish-section";
import ReviewsSection from "../RestaurantContent/ReviewsSection/review-section";
import ReviewForm from "../RestaurantContent/ReviewsSection/ReviewForm/review-form";
import { CartContainer } from "../Cart/cart-list";

export const RestaurantContainer = ({ activeRestaurantId }) => {
  const restaurant = useSelector((state) => {
    return selectRestaurantById(state, activeRestaurantId);
  });

  if (!restaurant) return null;

  const { name, menu, reviews } = restaurant;

  return (
    <div className="restaurant-content">
      <CartContainer />
      <RestaurantHeader reviewIds={reviews} name={name} />
      <DishSection menuIds={menu} />
      <ReviewsSection reviewIds={reviews} />
      <ReviewForm />
    </div>
  );
};
