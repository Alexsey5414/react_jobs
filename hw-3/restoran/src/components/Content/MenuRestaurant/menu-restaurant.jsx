import "./menu-restaurant.css";
import MenuCounter from "../CountMenu/menu-count";

const MenuRestaurant = ({ restaurant }) => {
  return (
    <>
      <h3>Меню</h3>
      <div className="menu-items">
        {restaurant.menu.map((menu) => (
          <div key={menu.id} className="menu-item">
            <div className="menu-item-header">
              <h3 className="item-name">{menu.name}</h3>
              <p className="item-ingredients">{menu.ingredients.join(", ")}</p>
              <span className="item-price">{menu.price} Р</span>
              <MenuCounter />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default MenuRestaurant;
