import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { apiResource } from "../../services/api";

import ButtonComponent from "../../components/Button";
import Carousel from "../../components/Carousel";
import { CartContext } from "../../components/Layout";

import "./style.scss";

const HomePage = () => {
  const history = useHistory();
  const { state } = useContext(CartContext);
  const [banners, updateBanners] = useState([]);
  const [categories, updateCategories] = useState([]);
  useEffect(() => {
    getOffers();
    getCategory();
  }, []);
  const getOffers = async () => {
    const result = await apiResource.get("banners");
    updateBanners(result);
  };
  const getCategory = async () => {
    let tempArr = [];
    const result = await apiResource.get("categories");
    if (result?.length) tempArr = result.filter((el) => el.enabled);
    updateCategories(tempArr);
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
                  <h3>{name}</h3>
                  <p className="banner-text">{description}</p>
                  <ButtonComponent
                    buttonText={`Explore ${key}`}
                    buttonPadding="1em"
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
