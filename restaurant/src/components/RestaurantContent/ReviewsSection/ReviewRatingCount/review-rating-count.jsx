import React from "react";
import QuantityButtons from "../../../common/QuantityButtons/quantity-buttons";
import "./review-rating-count.css";
/* eslint-disable react/prop-types */
const ReviewRatingCount = ({
  quantity,
  minLimit,
  maxLimit,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="review-rating-count-control">
      <div className="review-rating-count-section">
        <span className="review-rating-count-label">Рэйтинг:</span>
        <QuantityButtons
          quantity={quantity}
          minLimit={minLimit}
          maxLimit={maxLimit}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>
    </div>
  );
};

export default ReviewRatingCount;
