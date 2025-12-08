import Layout from "./components/Layout/Layout";
import Restaurant from "./components/Restaurant/Restaurant";
import { ThemeContextProvider } from "./components/context/theme-context";
import { AuthContextProvider } from "./components/context/auth-context";

import "./App.css";

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <Restaurant />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
