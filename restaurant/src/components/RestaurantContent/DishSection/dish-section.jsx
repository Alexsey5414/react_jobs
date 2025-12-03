import React from "react";
import Dish from "./Dish/dish";
/* eslint-disable react/prop-types */
const DishSection = ({ menu }) => {
  return (
    <section>
      <div className="section-header">
        <h3 className="section-title">Блюда</h3>
      </div>

      <div className="section-items">
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default DishSection;
