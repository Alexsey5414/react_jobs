import React from "react";
import QuantityButtons from "../../../common/QuantityButtons/quantity-buttons";
import styles from "./review-rating-count.module.css";

const ReviewRatingCount = ({
  quantity,
  minLimit,
  maxLimit,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className={styles["count-control"]}>
      <div className={styles["count-section"]}>
        <span className={styles["count-label"]}>Рэйтинг:</span>
        <QuantityButtons
          quantity={quantity}
          minLimit={minLimit}
          maxLimit={maxLimit}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>
    </div>
  );
};

export default ReviewRatingCount;
