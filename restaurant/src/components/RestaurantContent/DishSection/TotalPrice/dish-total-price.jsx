import React from "react";
import "./dish-total-price.css";

const TotalPrice = ({ total }) => {
  return (
    <div className="total-price">
      Всего: <strong>₽{total}</strong>
    </div>
  );
};

export default TotalPrice;
