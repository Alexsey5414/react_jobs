import React, { useContext } from "react";
import { ToggleThemeContext } from "../context";
import Button from "../Button/button";

const ToggleThemeButton = () => {
  const setTheme = useContext(ToggleThemeContext);
  return (
    <Button
      title={"Сменить тему"}
      focused={true}
      onClick={() =>
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
      }
    />
  );
};

export default ToggleThemeButton;
