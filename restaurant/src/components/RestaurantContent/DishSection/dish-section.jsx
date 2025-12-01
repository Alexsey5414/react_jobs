import React from "react";
import Dish from "./Dish/dish";
import "./dish-section.css";
/* eslint-disable react/prop-types */
const DishSection = ({ menu }) => {
  return (
    <section className="dish-section">
      <div className="section-header">
        <h3 className="section-title">Блюда</h3>
        <div className="dish-divider"></div>
      </div>

      <div className="dish-items">
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default DishSection;
