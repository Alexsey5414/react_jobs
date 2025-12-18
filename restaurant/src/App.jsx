import Layout from "./components/Layout/Layout";
import { ThemeContextProvider } from "./components/context/theme-context";
import { AuthContextProvider } from "./components/context/auth-context";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import RestaurantPage from "./components/RestaurantPages/restaurant-page";
import RestaurantLayout from "./components/RestaurantLayout/restaurant-layout";
import HomePage from "./components/RestaurantPages/home-page";
import { MenuPage } from "./components/RestaurantPages/dish-page";
import { ReviewPage } from "./components/RestaurantPages/review-page";
import { DishNavigatePage } from "./components/RestaurantPages/dish-navigate-page";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/about" element={<div>about page</div>} />
                  <Route path="/dish/:dishId" element={<DishNavigatePage />} />
                  <Route path="/restaurants" element={<RestaurantLayout />}>
                    <Route path=":restaurantId" element={<RestaurantPage />}>
                      <Route path="dish" element={<MenuPage />} />
                      <Route path="review" element={<ReviewPage />} />
                    </Route>
                  </Route>
                  <Route path="*" element={<div>not found</div>} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ThemeContextProvider>
        </AuthContextProvider>
      </Provider>
    </div>
  );
}

export default App;
