import React from "react";
import styles from "./quantity-buttons.module.css";
import classNames from "classnames/bind";
const QuantityButtons = ({
  quantity,
  minLimit,
  maxLimit,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className={styles["quantity-buttons"]}>
      <button
        className={classNames(styles["quantity-btn"], styles["decrease"])}
        //"quantity-btn decrease"
        onClick={onDecrease}
        disabled={quantity === minLimit}
      >
        -
      </button>
      <span className={styles["quantity-display"]}>{quantity}</span>
      <button
        className={classNames(styles["quantity-btn"], styles.increase)}
        onClick={onIncrease}
        disabled={quantity === maxLimit}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
