import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { apiResource } from "../../services/api";

import ButtonComponent from "../../components/Button";
import SideMenuComponent from "../../components/SideMenu";
import { CartContext } from "../../components/Layout";

import arrow from "../../static/images/down-arrow.svg";
import "./style.scss";

const ProductPage = () => {
  const location = useLocation();
  const history = useHistory();

  const { state, dispatch } = useContext(CartContext);
  const [categories, updateCategories] = useState([]);
  const [products, updateProducts] = useState([]);
  const [currentCategory, updateCurrentCategory] = useState({});
  useEffect(() => {
    getData();
    if (location?.state?.category) {
      const {
        state: { category },
      } = location;
      updateCurrentCategory(category);
      history.replace({});
    }
  }, []); // eslint-disable-line
  const getData = async () => {
    let tempArr = [];
    const prodcutResult = await apiResource.get("products");
    const result = await apiResource.get("categories");
    if (result?.length) tempArr = result.filter((el) => el.enabled);
    updateProducts(prodcutResult);
    updateCategories(tempArr);
  };
  return (
    <div className="product-page">
      <SideMenuComponent categories={categories} />
      {products.length ? (
        <div className="product-list">
          {products &&
            products.map((product) => (
              <div className="each-card" key={product.id}>
                <div className="side-border" />
                <h4
                  onClick={() =>
                    dispatch({
                      type: "removeItem",
                      payload: product,
                    })
                  }
                >
                  {product.name}
                </h4>
                <img
                  className="product-image"
                  src={state?.images[product.imageURL]}
                  alt={product.sku}
                />
                <p className="product-description">
                  {product.description.slice(0, 138)}
                </p>
                <div className="product-tablet">
                  <img
                    src={state?.images[product.imageURL]}
                    alt={product.sku}
                  />
                  <p className="product-description-tablet">
                    {product.description.slice(0, 170)}
                  </p>
                </div>
                <div className="price-description">
                  <p>MRP Rs.{product.price}</p>
                  <ButtonComponent
                    onClick={() =>
                      dispatch({
                        type: "addItem",
                        payload: product,
                      })
                    }
                    buttonText="Buy Now"
                    buttonPadding="0.5em 1.5em"
                  />
                </div>
                <span className="tablet-button">
                  <ButtonComponent
                    onClick={() =>
                      dispatch({
                        type: "addItem",
                        payload: product,
                      })
                    }
                    buttonText={`Buy Now @ Rs.${product.price}`}
                    buttonWidth="100%"
                    buttonFont="12px"
                  />
                </span>
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
      {products.length ? (
        <div className="product-list mobile">
          {categories &&
            categories.map((category) => (
              <div key={category.id}>
                <div
                  className="each-category"
                  onClick={() => updateCurrentCategory(category)}
                >
                  <p>{category.name}</p>
                  <img
                    className={
                      currentCategory.id !== category.id && "hide-icon"
                    }
                    src={arrow}
                    alt="arrow"
                  />
                </div>
                {currentCategory?.id === category.id &&
                  products &&
                  products.map((product) => {
                    if (product.category === category.id) {
                      return (
                        <div className="each-card" key={product.id}>
                          <h4
                            onClick={() =>
                              dispatch({
                                type: "removeItem",
                                payload: product,
                              })
                            }
                          >
                            {product.name}
                          </h4>
                          <img
                            className="product-image"
                            src={state?.images[product.imageURL]}
                            alt={product.sku}
                          />
                          <p className="product-description">
                            {product.description.slice(0, 130)}
                          </p>
                          <div className="product-tablet">
                            <img
                              src={state?.images[product.imageURL]}
                              alt={product.sku}
                            />
                            <div className="product-mobile-info">
                              <p className="product-description-tablet">
                                {product.description.slice(0, 130)}
                              </p>
                              <ButtonComponent
                                onClick={() =>
                                  dispatch({
                                    type: "addItem",
                                    payload: product,
                                  })
                                }
                                buttonText={`Buy Now @ Rs.${product.price}`}
                                buttonWidth="100%"
                                buttonFont="12px"
                                buttonPadding="1em 0"
                              />
                            </div>
                          </div>
                          <div className="price-description">
                            <p>MRP Rs.{product.price}</p>
                            <ButtonComponent
                              onClick={() =>
                                dispatch({
                                  type: "addItem",
                                  payload: product,
                                })
                              }
                              buttonText="Buy Now"
                              buttonPadding="0.5em"
                            />
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ProductPage;
