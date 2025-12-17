import React from "react";
import StarRating from "../../common/StartRating/start-rating";
import { selectReviewEntities } from "../../../redux/entities/reviews/slice";
import { useSelector } from "react-redux";

const RestaurantHeader = ({ reviewIds, name }) => {
  const reviewEntities = useSelector((state) => selectReviewEntities(state));

  if (!reviewEntities) return null;

  const reviews = reviewIds.map((id) => reviewEntities[id]);

  const averageRating =
    reviews?.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div className="restaurant-header">
      <h2 className="restaurant-name">{name}</h2>
      <div className="restaurant-rating">
        <StarRating rating={Math.round(averageRating)} />
        <span className="rating-text">
          {averageRating} ({reviews.length} reviews)
        </span>
      </div>
    </div>
  );
};

export default RestaurantHeader;
