import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  selectAmountByItemId,
} from "../../../../redux/entities/cart/slice";

export const useCount = (dishid) => {
  const dispatch = useDispatch();

  const quantity =
    useSelector((state) => selectAmountByItemId(state, dishid)) || 0;

  const increment = useCallback(
    () => dispatch(addToCart(dishid)),
    [dishid, dispatch]
  );

  const decrement = useCallback(
    () => dispatch(deleteFromCart(dishid)),
    [dishid, dispatch]
  );

  return {
    quantity,
    increment,
    decrement,
  };
};
