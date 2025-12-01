import React from "react";
import StarRating from "../../../common/StartRating/start-rating";
import "./review-item.css";
/* eslint-disable react/prop-types */
const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <div className="review-header">
        <div className="review-user">
          <span className="user-avatar">{review.user.charAt(0)}</span>
          <div className="user-info">
            <span className="user-name">{review.user}</span>
            <StarRating rating={review.rating} />
          </div>
        </div>
      </div>
      <p className="review-text">{review.text}</p>
    </div>
  );
};

export default ReviewItem;
