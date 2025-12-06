import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import { restaurants } from "./service/restaurants";
import TabPanel from "./components/RestaurantTabs/TabPanel/tabs";
import RestaurantContent from "./components/RestaurantContent/restaurant-content";
import ScrollProgressBar from "./components/ScrollProgressBar/scroll-progress-bar";
import { ThemeContext } from "./components/context/theme-context";
import ToggleThemeButton from "./components/ToggleThemeButton/toggle-theme-botton";
import { AuthContext } from "./components/context/auth-context";
import LoginButton from "./components/Auth/login";
import LogoutButton from "./components/Auth/logout";
/* eslint-disable react/react-in-jsx-scope */

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

  const [theme, setTheme] = useState("dark");
  const [userAuth, setUserAuth] = useState({ username: null });

  return (
    <div className="app">
      <AuthContext value={{ userAuth, setUserAuth }}>
        <ThemeContext value={{ theme, setTheme }}>
          <Header>
            <ToggleThemeButton />
            <LoginButton />
            <LogoutButton />
          </Header>
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
        </ThemeContext>
      </AuthContext>
    </div>
  );
}

export default App;
