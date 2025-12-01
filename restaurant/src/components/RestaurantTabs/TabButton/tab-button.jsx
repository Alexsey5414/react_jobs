import React from "react";
import "./tab-button.css";

const TabButton = ({ restaurant, isActive, onClick }) => {
  return (
    <button
      className={`tab-button ${isActive ? "active" : ""}`}
      onClick={() => onClick(restaurant.id)}
    >
      {restaurant.name}
    </button>
  );
};

export default TabButton;
