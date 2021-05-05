import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { CartContext } from "../Layout";
import "./style.scss";
import companyLogo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";

const HeaderComponent = () => {
  const { state, dispatch } = useContext(CartContext);
  const history = useHistory();
  useEffect(() => {
    if (state.visibility) {
      document.body.style["overflow-y"] = "hidden";
    } else {
      document.body.style["overflow-y"] = "scroll";
    }
  }, [state.visibility]);
  return (
    <div
      className="header-section"
      onClick={() => {
        if (state.visibility) dispatch({ type: "changeVisibilty" });
      }}
    >
      <div className="header-container">
        <div className="logo-nav-link">
          <img
            onClick={() => history.push("/")}
            src={companyLogo}
            alt="logo"
            className="logo-img"
          />
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
        </div>
        <div className="item-cart">
          <div className="login-details">
            <Link to="/login">SignIn</Link>
            <Link to="/register" className="register-button">
              Register
            </Link>
          </div>
          <div
            className="item-quantity-header"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "changeVisibilty" });
            }}
          >
            <img src={cart} alt="logo" className="cart-img" />
            <span>{state.items.length} items</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
