import React from "react";
/* eslint-disable react/prop-types */
const StarRating = ({ rating }) => {
  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <span
      className="rating-stars"
      style={{ color: "#ffc107", fontSize: "1.2rem" }}
    >
      {renderStars(rating)}
    </span>
  );
};

export default StarRating;
