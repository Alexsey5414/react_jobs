import "./App.css";
import { restaurants } from "./service/restaurants";

function App() {
  return (
    <div className="main-content">
      <h1>Список ресторанов!</h1>
      {restaurants.map((rest) => (
        <div key={rest.id} className="restaurant">
          <h2>{rest.name}</h2>
          <h3>Меню</h3>
          <div className="menu-restaurant">
            <ul>
              {rest.menu.map((menu) => (
                <li key={menu.id}>
                  {menu.name} ({menu.ingredients.join(", ")})
                </li>
              ))}
            </ul>
          </div>
          <h3>Отзывы</h3>
          <div className="menu-review">
            <ul>
              {rest.reviews.map((review) => (
                <li key={review.id}>
                  <div className="user-container">
                    <div> {review.user}</div>
                    <div> {review.text}</div>
                    <div> {review.rating}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
