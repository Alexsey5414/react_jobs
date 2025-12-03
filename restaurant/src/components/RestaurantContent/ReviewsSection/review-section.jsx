import React from "react";
import ReviewItem from "./ReviewItem/review-item";
/* eslint-disable react/prop-types */
const ReviewsSection = ({ reviews }) => {
  return (
    <section>
      <h3 className="section-title">Отзывы</h3>
      <div className="divider"></div>
      <div className="section-items">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
