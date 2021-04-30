import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import LoadingComponent from "./components/LoadingComponent";

const RegisterPage = Loadable({
  loader: () => import(/* webpackChunkName: "Register" */ "./routes/Register"),
  loading: LoadingComponent,
});
const LoginPage = Loadable({
  loader: () => import(/* webpackChunkName: "Login" */ "./routes/Login"),
  loading: LoadingComponent,
});
const HomePage = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ "./routes/Home"),
  loading: LoadingComponent,
});
const ProductPage = Loadable({
  loader: () => import(/* webpackChunkName: "Product" */ "./routes/Product"),
  loading: LoadingComponent,
});
const HeaderComponent = Loadable({
  loader: () => import(/* webpackChunkName: "Header" */ "./components/Header"),
  loading: LoadingComponent,
});
const FooterComponent = Loadable({
  loader: () => import(/* webpackChunkName: "Footer" */ "./components/Footer"),
  loading: LoadingComponent,
});

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
