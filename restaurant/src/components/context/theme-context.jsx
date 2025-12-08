import React from "react";
import { useState } from "react";
import { ThemeContext, ToggleThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ActionProvider setTheme={setTheme}>
      <ValueProvider theme={theme}>{children}</ValueProvider>
    </ActionProvider>
  );
};

const ActionProvider = ({ setTheme, children }) => {
  return <ToggleThemeContext value={setTheme}>{children}</ToggleThemeContext>;
};

const ValueProvider = ({ theme, children }) => {
  return <ThemeContext value={theme}>{children}</ThemeContext>;
};
