import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import { restaurants } from "./service/restaurants";
import NavigateTabs from "./components/Tabs/tabs";
import RestaurantContent from "./components/Content/content";

function App() {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
  const handlerTabClick = (restaurant) => setActiveRestaurant(restaurant);
  return (
    <div className="app">
      <Header />
      <Main>
        <NavigateTabs
          restaurants={restaurants}
          activeRestaurant={activeRestaurant}
          onTabClick={handlerTabClick}
        />
        <RestaurantContent restaurant={activeRestaurant} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
