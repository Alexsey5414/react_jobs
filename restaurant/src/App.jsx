import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import { restaurants } from "./service/restaurants";
import TabPanel from "./components/RestaurantTabs/TabPanel/tabs";
import RestaurantContent from "./components/RestaurantContent/restaurant-content";
import ScrollProgressBar from "./components/ScrollProgressBar/scroll-progress-bar";

function App() {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );
  const handlerTabClick = (id) => {
    if (activeRestaurantId === id) return;

    setActiveRestaurantId(id);
  };

  return (
    <div className="app">
      <Header />
      <ScrollProgressBar />
      <Main>
        <TabPanel
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
