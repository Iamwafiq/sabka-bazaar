import loadable from "@loadable/component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";

const RegisterPage = loadable(
  () => import(/* webpackChunkName: "Register" */ "./routes/Register"),
  {
    fallback: "<div> Loading chunk ....</div>",
  }
);
const LoginPage = loadable(
  () => import(/* webpackChunkName: "Login" */ "./routes/Login"),
  {
    fallback: "<div> Loading chunk ....</div>",
  }
);
const HomePage = loadable(
  () => import(/* webpackChunkName: "Home" */ "./routes/Home"),
  {
    fallback: "<div> Loading chunk ....</div>",
  }
);
const ProductPage = loadable(
  () => import(/* webpackChunkName: "Product" */ "./routes/Product"),
  {
    fallback: "<div> Loading chunk ....</div>",
  }
);
const HeaderComponent = loadable(
  () => import(/* webpackChunkName: "Header" */ "./components/Header"),
  {
    fallback: "<div> Loading chunk ....</div>",
  }
);
const FooterComponent = loadable(
  () => import(/* webpackChunkName: "Footer" */ "./components/Footer"),
  {
    fallback: "<div> Loading chunk ....</div>",
  }
);

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
