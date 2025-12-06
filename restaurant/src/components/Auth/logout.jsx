import React, { useContext } from "react";
import styles from "./auth.module.css";
import { AuthContext } from "../context/auth-context";

const LogoutButton = () => {
  const { setUserAuth } = useContext(AuthContext);

  return (
    <button
      className={styles.Button}
      onClick={() => {
        setUserAuth({ username: null });
      }}
    >
      {"Выйти"}
    </button>
  );
};

export default LogoutButton;
