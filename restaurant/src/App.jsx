/* eslint-disable react/react-in-jsx-scope */
import Layout from "./components/Layout/Layout";
import Restaurant from "./components/Restaurant/Restaurant";
import { ThemeContextProvider } from "./components/context/theme-context";
import { AuthContextProvider } from "./components/context/auth-context";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Layout>
              <Restaurant />
            </Layout>
          </ThemeContextProvider>
        </AuthContextProvider>
      </Provider>
    </div>
  );
}

export default App;
