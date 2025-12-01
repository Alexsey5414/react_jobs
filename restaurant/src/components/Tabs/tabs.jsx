import React from "react";
import "./tabs.css";

const NavigateTabs = ({ restaurants, activeRestaurant, onTabClick }) => {
  return (
    <div className="tabs-container">
      <nav className="tabs-nav">
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            className={`tab-button ${
              activeRestaurant.id === restaurant.id ? "active" : ""
            }`}
            onClick={() => onTabClick(restaurant)}
          >
            {restaurant.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavigateTabs;
