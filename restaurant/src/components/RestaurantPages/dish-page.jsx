import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import DishSection from "../RestaurantContent/DishSection/dish-section";
import { useParams } from "react-router";

export const DishPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => {
    return selectRestaurantById(state, restaurantId);
  });

  if (!restaurant) return null;

  const { menu } = restaurant;

  return <DishSection menuIds={menu} />;
};
