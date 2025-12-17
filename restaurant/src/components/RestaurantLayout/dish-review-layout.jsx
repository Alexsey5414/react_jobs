import React from "react";
import TabNavPanel from "../TabNavPanel/tabs";
import { useParams } from "react-router";

const DishReviewLayout = () => {
  const { restaurantId } = useParams();
  var navTabs = [
    { id: "dish", name: "Блюда", route: `/restaurants/${restaurantId}/dish` },
    {
      id: "review",
      name: "Отзывы",
      route: `/restaurants/${restaurantId}/review`,
    },
  ];
  return (
    <>
      <TabNavPanel listtabs={navTabs} />
    </>
  );
};

export default DishReviewLayout;
