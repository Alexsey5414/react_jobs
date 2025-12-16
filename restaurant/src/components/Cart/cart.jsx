import { CartItemList } from "./cart-item/cart-item-container";

export const Cart = ({ itemsIds }) => {
  return (
    <div>
      <h3>Корзина</h3>
      <ul>
        {itemsIds.map((id) => (
          <li key={id}>
            <CartItemList id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
