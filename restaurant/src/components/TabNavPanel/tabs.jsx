import React from "react";
import "./tabs.css";
import TabNavButton from "../TabNavButton/tab-button";

const TabNavPanel = ({ listtabs }) => {
  if (!listtabs) return null;

  return (
    <div className="tabs-container">
      <nav className="tab-nav-container">
        {listtabs.map(({ id, name, route }) => (
          <TabNavButton key={id} title={name} route={route} />
        ))}
      </nav>
    </div>
  );
};

export default TabNavPanel;
