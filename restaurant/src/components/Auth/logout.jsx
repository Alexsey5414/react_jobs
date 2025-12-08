import React, { useContext } from "react";
import { ToggleAuthContext } from "../context";
import Button from "../Button/button";

const LogoutButton = () => {
  const { setUserAuth } = useContext(ToggleAuthContext);

  return (
    <Button
      title={"Выйти"}
      focused={true}
      onClick={() => {
        setUserAuth({ username: null });
      }}
    />
  );
};

export default LogoutButton;
