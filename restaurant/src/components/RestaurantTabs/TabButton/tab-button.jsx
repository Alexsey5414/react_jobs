import React from "react";
import "./tab-button.css";
import classNames from "classnames";

const TabButton = ({ restaurant, isActive, onClick }) => {
  return (
    <button
      className= {classNames('tab-button', {'active':  isActive})}
      onClick={() => onClick(restaurant.id)}
    >
      {restaurant.name}
    </button>
  );
};

export default TabButton;
