import React from "react";
import StarRating from "../../common/StartRating/start-rating";
import { selectReviewValues } from "../../../redux/entities/reviews/slice";
import { useSelector } from "react-redux";

const RestaurantHeader = ({ name }) => {
  const reviewValues = useSelector(selectReviewValues);

  if (!reviewValues) return null;

  const averageRating =
    reviewValues?.length > 0
      ? (
          reviewValues.reduce((sum, review) => sum + review.rating, 0) /
          reviewValues.length
        ).toFixed(1)
      : 0;

  return (
    <div className="restaurant-header">
      <h2 className="restaurant-name">{name}</h2>
      <div className="restaurant-rating">
        <StarRating rating={Math.round(averageRating)} />
        <span className="rating-text">
          {averageRating} ({reviewValues.length} reviews)
        </span>
      </div>
    </div>
  );
};

export default RestaurantHeader;
