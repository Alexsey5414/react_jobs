import React from "react";
import { useParams } from "react-router";
import Dish from "../RestaurantContent/DishSection/Dish/dish";

export const DishNavigatePage = () => {
  const { dishId } = useParams();
  return <Dish dishId={dishId} />;
};
