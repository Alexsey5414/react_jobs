import React, { useContext } from "react";
import "./tabs.css";
import TabButton from "../TabButton/tab-button";
import { ThemeContext } from "../../context";

const TabPanel = ({ restaurants, activeRestaurant, onTabClick }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="tabs-container">
      <nav className="tabs-nav">
        {restaurants.map((restaurant) => (
          <TabButton
            key={restaurant.id}
            restaurant={restaurant}
            isActive={activeRestaurant.id === restaurant.id}
            onClick={onTabClick}
            theme={theme}
          />
        ))}
      </nav>
    </div>
  );
};

export default TabPanel;
