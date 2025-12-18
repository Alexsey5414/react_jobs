import React from "react";
import styles from "./tab-button.module.css";
import { NavLink } from "react-router";
import classNames from "classnames/bind";

const TabNavButton = ({ title, route }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        classNames(styles.tab, { [styles["tab-active"]]: isActive })
      }
    >
      {title}
    </NavLink>
  );
};

export default TabNavButton;
