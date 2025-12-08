import React from "react";
import styles from "./tab-button.module.css";
import classNames from "classnames";

const TabButton = ({ restaurant, isActive, onClick, theme }) => {
  return (
    <button
      className={classNames(styles.tabButton, {
        [styles.active]: isActive,
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      onClick={() => onClick(restaurant.id)}
    >
      {restaurant.name}
    </button>
  );
};

export default TabButton;
