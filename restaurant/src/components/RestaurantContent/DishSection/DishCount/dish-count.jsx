import React from "react";
import QuantityButtons from "../../../common/QuantityButtons/quantity-buttons";
import TotalPrice from "../TotalPrice/dish-total-price";
import "./dish-count.css";
/* eslint-disable react/prop-types */
const DishCount = ({
  quantity,
  minLimit,
  maxLimit,
  price,
  onIncrease,
  onDecrease,
}) => {
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div className="dish-count-control">
      <div className="dish-count-section">
        <span className="dish-count-label">Количество:</span>
        <QuantityButtons
          quantity={quantity}
          minLimit={minLimit}
          maxLimit={maxLimit}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>

      {quantity > 0 && <TotalPrice total={totalPrice} />}
    </div>
  );
};

export default DishCount;
