import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { apiResource } from "../../services/api";

import ButtonComponent from "../../components/Button";
import Carousel from "../../components/Carousel";
import { CartContext } from "../../components/Layout";

import "./style.scss";

const HomePage = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(CartContext);
  const [banners, updateBanners] = useState([]);
  const [categories, updateCategories] = useState(state.categories);
  useEffect(() => {
    getOffers();
    if (!state.categories.length) getCategory();
  }, []); // eslint-disable-line
  const getOffers = async () => {
    const result = await apiResource.get("banners");
    updateBanners(result);
  };

  const getCategory = async () => {
    let tempArr = [];
    const result = await apiResource.get("categories");
    if (result?.length) tempArr = result.filter((el) => el.enabled);
    updateCategories(tempArr);
    dispatch({ type: "getCategories", payload: tempArr });
  };

  return (
    <div>
      {banners.length ? <Carousel data={banners} /> : ""}
      {categories &&
        categories.map((category, index) => {
          const { description, name, key, imageUrl } = category;
          return (
            <div className="offer-banner" key={category.id}>
              {index % 2 === 0 && (
                <img src={state.images[imageUrl]} alt={key} />
              )}
              <div className="fruit-banner-text">
                <div>
                  <h3 className="heading-laptop">{name}</h3>
                  <h3 className="heading-tab-mobile">{name}</h3>
                  <p className="banner-text">{description}</p>
                  <ButtonComponent
                    buttonText={`Explore ${key}`}
                    buttonPadding="1em"
                    buttonMargin="auto"
                    buttonDisplay="block"
                    onClick={() => history.push("/products", { category })}
                  />
                </div>
              </div>
              {index % 2 !== 0 && (
                <img src={state.images[imageUrl]} alt={key} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
