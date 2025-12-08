import React, { useContext } from "react";
import styles from "./button.module.css";
import classNames from "classnames/bind";
import { ThemeContext } from "../context";

const Button = ({ title, onClick, focused, disabled, className }) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      className={classNames(styles.Button, className, {
        [styles.active]: focused,
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
export default Button;
