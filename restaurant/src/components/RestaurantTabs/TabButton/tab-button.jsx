import React from "react";
import styles from "./tab-button.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurants/slice";

const TabButton = ({ restaurantId, isActive, onClick, theme }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  if (!restaurant) return null;

  return (
    <button
      className={classNames(styles.tabButton, {
        [styles.active]: isActive,
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      onClick={() => onClick(restaurantId)}
    >
      {restaurant.name}
    </button>
  );
};

export default TabButton;
