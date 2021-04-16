import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterPage from "./routes/Register";
import LoginPage from "./routes/Login";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import HomePage from "./routes/Home";
import ProductPage from "./routes/Product";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <div className="App">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/products">
              <ProductPage />
            </Route>
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    </Layout>
  );
};

export default App;
