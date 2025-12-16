import DishHeader from "../DishHeader/dish-header";
import DishCount from "../DishCount/dish-count";
import { AuthContext } from "../../../context";
import "./dish.css";
import { selectDishById } from "../../../../redux/entities/dishes/slice";
import { useSelector } from "react-redux";
import { useCount } from "./use-count";
import { useContext } from "react";

const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  if (!dish) return null;

  const { quantity, increment, decrement } = useCount(dishId);

  const userAuth = useContext(AuthContext);
  const minLimit = 0;
  const maxLimit = 10;

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
          onIncrease={increment}
          onDecrease={decrement}
        />
      )}
    </div>
  );
};

export default Dish;
