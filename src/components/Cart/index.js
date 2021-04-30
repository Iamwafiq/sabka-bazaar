import { useContext, useEffect, useState } from "react";
import "./style.scss";
import ButtonComponent from "../Button";
import { CartContext } from "../Layout";
import lowest from "../../static/images/lowest-price.png";

const Cart = ({ onClick }) => {
  const { state, dispatch } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  useEffect(() => {
    if (state.items.length) {
      let arr = [];
      let price = 0;
      for (let i = 0; i < state.items.length; i++) {
        price = state.items[i].price + price;
        const index = arr.findIndex((el) => el.id === state.items[i].id);
        if (index === -1) {
          state.items[i]["count"] = 1;
          arr.push(state.items[i]);
          setItems(arr);
        } else {
          arr[index]["count"] = arr[index].count + 1;
          setItems(arr);
        }
      }
      setTotalPrice(price);
    } else {
      setItems([]);
      setTotalPrice(null);
    }
  }, [state.items]);

  const renderItems = () => {
    return (
      <div className="cart-content">
        {items &&
          items.map((item) => (
            <div className="each-item">
              <img
                className="item-image"
                src={state?.images[item.imageURL]}
                alt={item.sku}
              />
              <div className="cart-item-details">
                <div className="item-detail">
                  <h4>{item.name}</h4>
                  <div className="item-content">
                    <div className="item-quantity">
                      <button
                        className="icon-button"
                        onClick={() =>
                          dispatch({ type: "removeItem", payload: item })
                        }
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        className="icon-button"
                        onClick={() =>
                          dispatch({ type: "addItem", payload: item })
                        }
                      >
                        +
                      </button>
                      <span className="times-icon">x</span>
                      <span>Rs.{item.price}</span>
                    </div>
                    <div className="item-final-price">
                      Rs.{item.price * item.count}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {state.items.length ? (
          <div className="lowest-price-banner">
            <img src={lowest} alt="lowest-tag" />
            <p>You won't find it cheaper anywhere</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <div className="modal-parent">
      <div className="modal-back" />
      <div className="modal-container">
        <div className="modal-content">
          <div className="cart-header">
            <div>
              My Cart{" "}
              {state.items.length ? (
                <span>({state.items.length} item)</span>
              ) : (
                ""
              )}
            </div>
            <p onClick={() => dispatch({ type: "changeVisibilty" })}>x</p>
          </div>
          {state.items.length ? (
            renderItems()
          ) : (
            <div className="cart-content empty-content">
              <h4>No items in your cart</h4>
              <p>Your favourite items are just a click away</p>
            </div>
          )}
          {state.items.length ? (
            <div className="cart-payment">
              <p className="promo-text">
                Promo code can be applied on payment page
              </p>
              <button className="proceed-button">
                <p>Proceed to Checkout</p>
                <p>
                  {" "}
                  Rs.{totalPrice} <p className="swipe-payment">></p>
                </p>
              </button>
            </div>
          ) : (
            <div className="cart-payment empty-cart">
              <ButtonComponent buttonText="Start Shopping" buttonWidth="100%" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
