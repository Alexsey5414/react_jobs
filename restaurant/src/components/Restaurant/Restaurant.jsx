import React, { useState } from "react";
//import { restaurants } from "./../../service/restaurants";
import TabPanel from "../RestaurantTabs/TabPanel/tabs";
import { RestaurantContainer } from "./RestaurantContainer";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice";

const Restaurant = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

  const handlerTabClick = (id) => {
    if (activeRestaurantId === id) return;

    setActiveRestaurantId(id);
  };
  return (
    <>
      {activeRestaurantId && (
        <>
          <TabPanel
            restaurantIds={restaurantIds}
            activeRestaurantId={activeRestaurantId}
            onTabClick={handlerTabClick}
          />

          <RestaurantContainer
            key={activeRestaurantId}
            activeRestaurantId={activeRestaurantId}
          />
        </>
      )}
    </>
  );
};

export default Restaurant;
