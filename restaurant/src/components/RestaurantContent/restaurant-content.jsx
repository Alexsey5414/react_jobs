import React from "react";
import RestaurantHeader from "./RestaurantHeader/restaurant-header";
import DishSection from "./DishSection/dish-section";
import ReviewsSection from "./ReviewsSection/review-section";
import ReviewForm from "./ReviewsSection/ReviewForm/review-form";
import "./restaurant-content.css";
/* eslint-disable react/prop-types */
const RestaurantContent = ({ restaurant }) => {
  if (!restaurant) {
    return <div className="restaurant-content">Выбирите ресторан</div>;
  }

  return (
    <div className="restaurant-content">
      <RestaurantHeader restaurant={restaurant} />
      <DishSection menu={restaurant.menu} />
      <ReviewsSection reviews={restaurant.reviews} />
      <ReviewForm />
    </div>
  );
};

export default RestaurantContent;
