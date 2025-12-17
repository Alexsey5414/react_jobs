import React from "react";
import TabNavPanel from "../TabNavPanel/tabs";
import { useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantEntities,
} from "../../redux/entities/restaurants/slice";
import { Outlet } from "react-router";

const RestaurantLayout = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const restaurantEntities = useSelector(selectRestaurantEntities);
  const arrayTabs = restaurantIds.map((id) => ({
    ...restaurantEntities[id],
    route: `/restaurants/${id}/dish`,
  }));

  //Обогащаем наименованием
  return (
    <>
      <TabNavPanel listtabs={arrayTabs} />
      <Outlet />
    </>
  );
};

export default RestaurantLayout;
