import "./header.css";
import React from "react";

/* eslint-disable react/prop-types */
const Header = ({children}) => {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Список ресторанов</h1>
          <p className="header-subtitle">Рейтинг лучших ресторанов</p>
        </div>
      <div className="header-left-content">
        {children}
      </div>
      </div>
     
    </header>
  );
};
export default Header;
