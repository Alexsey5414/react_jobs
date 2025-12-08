import React from "react";
import Header from "../Header/header";
import ToggleThemeButton from "../ToggleThemeButton/toggle-theme-botton";
import LoginButton from "../Auth/login";
import LogoutButton from "../Auth/logout";
import ScrollProgressBar from "../ScrollProgressBar/scroll-progress-bar";
import Main from "../Main/main";
import Footer from "../Footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <ToggleThemeButton />
        <LoginButton />
        <LogoutButton />
      </Header>
      <ScrollProgressBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
