import React, { useContext } from "react";
import { ToggleAuthContext, AuthContext } from "../context";
import Button from "../Button/button";

const userinfo = { username: "golubev" };

const LoginButton = () => {
  const { setUserAuth } = useContext(ToggleAuthContext);
  const userAuth = useContext(AuthContext);
  return (
    <Button
      title={userAuth.username ? userAuth.username : "Войти"}
      focused={true}
      onClick={() => {
        setUserAuth(userinfo);
      }}
    />
  );
};

export default LoginButton;
