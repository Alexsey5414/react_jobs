import React, { useContext } from "react";
import "./tabs.css";
import TabButton from "../TabButton/tab-button";
import { ThemeContext } from "../../context";

const TabPanel = ({ restaurantIds, activeRestaurantId, onTabClick }) => {
  const theme = useContext(ThemeContext);
  if (!restaurantIds) return null;

  return (
    <div className="tabs-container">
      <nav className="tabs-nav">
        {restaurantIds.map((id) => (
          <TabButton
            key={id}
            restaurantId={id}
            isActive={activeRestaurantId === id}
            onClick={onTabClick}
            theme={theme}
          />
        ))}
      </nav>
    </div>
  );
};

export default TabPanel;
