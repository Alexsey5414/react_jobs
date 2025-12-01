import React from "react";
import "./tabs.css";
import TabButton from "../TabButton/tab-button";

const TabPanel = ({ restaurants, activeRestaurant, onTabClick }) => {
  return (
    <div className="tabs-container">
      <nav className="tabs-nav">
        {restaurants.map((restaurant) => (
          <TabButton
            key={restaurant.id}
            restaurant={restaurant}
            isActive={activeRestaurant.id === restaurant.id}
            onClick={onTabClick}
          />
        ))}
      </nav>
    </div>
  );
};

export default TabPanel;
