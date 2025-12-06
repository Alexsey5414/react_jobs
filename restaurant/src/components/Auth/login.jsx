import React, { useContext } from "react";
import styles from "./auth.module.css";
import { AuthContext } from "../context/auth-context";

const userinfo = { username: "golubev" };

const LoginButton = () => {
  const { userAuth, setUserAuth } = useContext(AuthContext);
  //const action = useMemo(()=> ({ setUserAuth }), [setUserAuth]);

  return (
    <button
      className={styles.Button}
      onClick={() => {
        setUserAuth(userinfo);
      }}
    >
      {console.log("userAuth.username", userAuth.username)}
      {userAuth.username ? userAuth.username : "Войти"}
    </button>
  );
};

export default LoginButton;
