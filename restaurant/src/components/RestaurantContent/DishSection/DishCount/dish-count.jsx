import React from "react";
import QuantityButtons from "../../../common/QuantityButtons/quantity-buttons";
import TotalPrice from "../TotalPrice/dish-total-price";
import styles from "./dish-count.module.css";

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
    <div className={styles["count-control"]}>
      <div className={styles["count-section"]}>
        <span className={styles["count-label"]}>Количество:</span>
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
