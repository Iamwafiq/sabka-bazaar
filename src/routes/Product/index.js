import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { apiResource } from "../../services/api";

import SideMenuComponent from "../../components/SideMenu";
import { CartContext } from "../../components/Layout";
import MobileProductCard from "../../components/MobileProductCard";
import ProductCard from "../../components/ProductCard";

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
        <ProductCard products={products} dispatch={dispatch} state={state} />
      ) : (
        ""
      )}
      {products.length ? (
        <MobileProductCard
          updateCurrentCategory={updateCurrentCategory}
          currentCategory={currentCategory}
          products={products}
          dispatch={dispatch}
          categories={categories}
          state={state}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default ProductPage;
