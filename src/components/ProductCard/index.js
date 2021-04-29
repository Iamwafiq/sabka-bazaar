import ButtonComponent from "../../components/Button";

const ProductCard = (props) => {
  const { products, dispatch, state } = props;
  return (
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
            <div className="product-detail">
              <img src={state?.images[product.imageURL]} alt={product.sku} />
              <p className="product-description">
                {product.description.slice(0, 165)}
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
                buttonPadding="0.4em 0em"
                buttonWidth="52%"
              />
            </div>
            <div className="tablet-button">
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
            </div>
          </div>
        ))}
    </div>
  );
};
export default ProductCard;
