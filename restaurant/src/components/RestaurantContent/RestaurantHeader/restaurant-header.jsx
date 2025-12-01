import React from "react";
import StarRating from "../../common/StartRating/start-rating";

const RestaurantHeader = ({ restaurant }) => {
  const averageRating =
    restaurant.reviews.length > 0
      ? (
          restaurant.reviews.reduce((sum, review) => sum + review.rating, 0) /
          restaurant.reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div className="restaurant-header">
      <h2 className="restaurant-name">{restaurant.name}</h2>
      <div className="restaurant-rating">
        <StarRating rating={Math.round(averageRating)} />
        <span className="rating-text">
          {averageRating} ({restaurant.reviews.length} reviews)
        </span>
      </div>
    </div>
  );
};

export default RestaurantHeader;
