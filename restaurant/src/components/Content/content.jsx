import "./content.css";
import MenuRestaurant from "./MenuRestaurant/menu-restaurant";
import ReviewRestaurant from "./Reviews/review-restaurant";

const RestaurantContent = ({ restaurant }) => {
  if (!restaurant) return <div className="munu-content">Выбирите ресторан</div>;

  return (
    <>
      <div className="menu-content">
        <div className="restaurant-header">
          <h2 className="restaurant-name">{restaurant.name}</h2>

          <div className="menu-splitter"></div>
        </div>
      </div>
      <MenuRestaurant restaurant={restaurant} />
      <ReviewRestaurant restaurant={restaurant} />
    </>
  );
};

export default RestaurantContent;
