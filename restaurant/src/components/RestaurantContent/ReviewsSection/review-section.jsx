import React from "react";
import ReviewItem from "./ReviewItem/review-item";
import "./review-section.css";
/* eslint-disable react/prop-types */
const ReviewsSection = ({ reviews }) => {
  return (
    <section className="reviews-section">
      <h3 className="section-title">Отзывы</h3>
      <div className="review-divider"></div>
      <div className="reviews-list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
