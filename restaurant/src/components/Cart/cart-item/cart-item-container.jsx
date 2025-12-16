import { useSelector } from "react-redux";
import { selectAmountByItemId } from "../../../redux/entities/cart/slice";
import { selectDishById } from "../../../redux/entities/dishes/slice";
import { CartItem } from "./cart-item";

export const CartItemList = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <CartItem amount={amount} dishname={dish.name} />;
};
