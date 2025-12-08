import React from "react";
import { useState, useMemo } from "react";
import { AuthContext, ToggleAuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({ username: null });
  return (
    <ActionProvider setUserAuth={setUserAuth}>
      <ValueProvider userAuth={userAuth}>{children}</ValueProvider>
    </ActionProvider>
  );
};

const ActionProvider = ({ setUserAuth, children }) => {
  const actions = useMemo(
    () => ({
      setUserAuth,
    }),
    [setUserAuth]
  );
  return <ToggleAuthContext value={actions}>{children}</ToggleAuthContext>;
};

const ValueProvider = ({ userAuth, children }) => {
  return <AuthContext value={userAuth}>{children}</AuthContext>;
};
