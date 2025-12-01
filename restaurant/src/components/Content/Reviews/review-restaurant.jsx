import React from "react";

const ReviewRestaurant = ({ restaurant }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <div className="menu-items">
        {restaurant.reviews.map((review) => (
          <div key={review.id} className="menu-item">
            <div className="menu-item-header">
              <h3 className="item-name">{review.user}</h3>

              <p className="item-ingredients">{review.text}</p>
              <span className="item-price">{review.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ReviewRestaurant;
