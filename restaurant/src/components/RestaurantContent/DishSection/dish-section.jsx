import React from "react";
import Dish from "./Dish/dish";

const DishSection = ({ menuIds }) => {
  return (
    <section>
      <div className="section-header">
        <h3 className="section-title">Блюда</h3>
      </div>

      <div className="section-items">
        {menuIds.map((id) => (
          <Dish key={id} dishId={id} />
        ))}
      </div>
    </section>
  );
};

export default DishSection;
