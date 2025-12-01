import React from "react";
import "./quantity-buttons.css";
/* eslint-disable react/prop-types */
const QuantityButtons = ({
  quantity,
  minLimit,
  maxLimit,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="quantity-buttons">
      <button
        className="quantity-btn decrease"
        onClick={onDecrease}
        disabled={quantity === minLimit}
      >
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button
        className="quantity-btn increase"
        onClick={onIncrease}
        disabled={quantity === maxLimit}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
