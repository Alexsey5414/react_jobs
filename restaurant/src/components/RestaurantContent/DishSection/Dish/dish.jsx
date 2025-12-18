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
  const { quantity, increment, decrement } = useCount(dishId);
  const userAuth = useContext(AuthContext);

  if (!dish) return null;
  if (!userAuth) return null;
  const minLimit = 0;
  const maxLimit = 10;

  return (
    <div className="dish">
      <DishHeader
        id={dishId}
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
