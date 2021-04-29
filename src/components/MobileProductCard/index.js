import ButtonComponent from "../Button";
import arrow from "../../static/images/down-arrow.svg";

import "./style.scss";
const MobileProductCard = (props) => {
  const {
    updateCurrentCategory,
    currentCategory,
    products,
    dispatch,
    categories,
    state,
  } = props;

  return (
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
                className={currentCategory.id !== category.id && "hide-icon"}
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
                      <div className="product-detail">
                        <img
                          src={state?.images[product.imageURL]}
                          alt={product.sku}
                        />
                        <div className="product-mobile-info">
                          <p className="product-description">
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
                    </div>
                  );
                }
                return null;
              })}
          </div>
        ))}
    </div>
  );
};
export default MobileProductCard;
