import React from "react";
import ReviewItem from "./ReviewItem/review-item";

const ReviewsSection = ({ reviewIds }) => {
  return (
    <section>
      <h3 className="section-title">Отзывы</h3>
      <div className="divider"></div>
      <div className="section-items">
        {reviewIds.map((id) => (
          <ReviewItem key={id} reviewId={id} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
