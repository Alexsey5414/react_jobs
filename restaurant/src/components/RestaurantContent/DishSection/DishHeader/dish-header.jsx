import React from "react";
import "./dish-header.css";

const DishHeader = ({ name, price, ingredients }) => {
  return (
    <div className="dish-header">
      <div className="dish-info">
        <h4 className="dish-name">{name}</h4>
        <div className="dish-ingredients">
          <strong>Ingredients:</strong> {ingredients.join(", ")}
        </div>
      </div>
      <div className="dish-price">₽{price}</div>
    </div>
  );
};

export default DishHeader;
