import React, { useState, useContext } from "react";
import DishHeader from "../DishHeader/dish-header";
import DishCount from "../DishCount/dish-count";
import { AuthContext } from "../../../context";
import "./dish.css";

const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(0);
  const userAuth = useContext(AuthContext);
  const minLimit = 0;
  const maxLimit = 10;

  const increaseQuantity = () => {
    if (quantity < maxLimit) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > minLimit) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="dish">
      <DishHeader
        name={dish.name}
        price={dish.price}
        ingredients={dish.ingredients}
      />
      {userAuth.username && (
        <DishCount
          quantity={quantity}
          minLimit={minLimit}
          maxLimit={maxLimit}
          price={dish.price}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      )}
    </div>
  );
};

export default Dish;
