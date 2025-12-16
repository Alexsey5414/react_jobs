import React from "react";
import StarRating from "../../../common/StartRating/start-rating";
import "./review-item.css";
import { selectReviewById } from "../../../../redux/entities/reviews/slice";
import { selectUserById } from "../../../../redux/entities/users/slice";
import { useSelector } from "react-redux";

const ReviewItem = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  if (!review) return null;

  const user = useSelector((state) => selectUserById(state, review.userId));
  if (!user) return null;

  return (
    <div className="review-item">
      <div className="review-header">
        <div className="review-user">
          <span className="user-avatar">{user?.name?.charAt(0)}</span>
          <div className="user-info">
            <span className="user-name">{user?.name}</span>
            <StarRating rating={review?.rating} />
          </div>
        </div>
      </div>
      <p className="review-text">{review?.text}</p>
    </div>
  );
};

export default ReviewItem;
