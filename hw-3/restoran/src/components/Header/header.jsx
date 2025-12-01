import "./header.css";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">Список ресторанов</h1>
          <p className="header-subtitle">Рейтинг лучших ресторанов</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
