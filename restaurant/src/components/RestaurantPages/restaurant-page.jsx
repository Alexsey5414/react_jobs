import React from "react";
import { RestaurantContainer } from "../Restaurant/RestaurantContainer";
import { useParams } from "react-router";

const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return (
    <>
      <RestaurantContainer activeRestaurantId={restaurantId} />
    </>
  );
};

export default RestaurantPage;
