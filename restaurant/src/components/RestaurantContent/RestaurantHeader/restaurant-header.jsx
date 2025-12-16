/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import StarRating from "../../common/StartRating/start-rating";
import { selectReviewById } from "../../../redux/entities/reviews/slice";
import { useSelector } from "react-redux";

const RestaurantHeader = ({ reviewIds, name }) => {
  const selectReview = useCallback(
    (reviewid) => useSelector((state) => selectReviewById(state, reviewid)),
    [reviewIds]
  );
  if (!selectReview) return null;

  const averageRating =
    reviewIds?.length > 0
      ? (
          reviewIds.reduce((sum, id) => sum + selectReview(id).rating, 0) /
          reviewIds.length
        ).toFixed(1)
      : 0;

  return (
    <div className="restaurant-header">
      <h2 className="restaurant-name">{name}</h2>
      <div className="restaurant-rating">
        <StarRating rating={Math.round(averageRating)} />
        <span className="rating-text">
          {averageRating} ({reviewIds.length} reviews)
        </span>
      </div>
    </div>
  );
};

export default RestaurantHeader;
