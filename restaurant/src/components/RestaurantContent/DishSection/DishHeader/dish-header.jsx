import React from "react";
import { NavLink } from "react-router";
import styles from "./dish-header.module.css";
import classNames from "classnames";

const DishHeader = ({ id, name, price, ingredients }) => {
  return (
    <div className={styles.dishHeader}>
      <div className={styles.dishInfo}>
        <NavLink
          to={`/dish/${id}`}
          className={({ isActive }) =>
            classNames(styles.navLinkH2, { [styles["active"]]: isActive })
          }
        >
          {name}
        </NavLink>
        <div className={styles.dishIngredients}>
          <strong>Ingredients:</strong> {ingredients?.join(", ")}
        </div>
      </div>
      <div className={styles.dishPrice}>₽{price}</div>
    </div>
  );
};

export default DishHeader;
