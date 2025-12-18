import React from "react";
import TabNavPanel from "../TabNavPanel/tabs";
import { useSelector } from "react-redux";
import { selectRestaurantValues } from "../../redux/entities/restaurants/slice";
import { Outlet } from "react-router";

const RestaurantLayout = () => {
  const arrayTabs = useSelector(selectRestaurantValues);

  //Обогащаем наименованием
  return (
    <>
      <TabNavPanel listtabs={arrayTabs} />
      <Outlet />
    </>
  );
};

export default RestaurantLayout;
