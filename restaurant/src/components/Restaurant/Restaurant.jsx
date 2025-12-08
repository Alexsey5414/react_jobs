import React, { useState } from "react";
import { restaurants } from "./../../service/restaurants";
import TabPanel from "../RestaurantTabs/TabPanel/tabs";
import RestaurantContent from "../RestaurantContent/restaurant-content";

const Restaurant = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );
  const handlerTabClick = (id) => {
    if (activeRestaurantId === id) return;

    setActiveRestaurantId(id);
  };
  return (
    <>
      <TabPanel
        restaurants={restaurants}
        activeRestaurant={activeRestaurant}
        onTabClick={handlerTabClick}
      />
      <RestaurantContent restaurant={activeRestaurant} />
    </>
  );
};

export default Restaurant;
