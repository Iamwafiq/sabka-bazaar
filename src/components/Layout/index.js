import { createContext, useReducer } from "react";
import { cloneDeep } from "lodash";
import Cart from "../Cart";

import apple from "../../static/images/products/fruit-n-veg/apple.jpg";
import capsicum from "../../static/images/products/fruit-n-veg/capsicum-green.jpg";
import kiwi from "../../static/images/products/fruit-n-veg/kiwi-green.jpg";
import pomegrante from "../../static/images/products/fruit-n-veg/pomegrante.jpg";
import tomato from "../../static/images/products/fruit-n-veg/tomato.jpg";
import bournvita from "../../static/images/products/beverages/bournvita.jpg";
import coke from "../../static/images/products/beverages/coke.jpg";
import redLabel from "../../static/images/products/beverages/red-label.jpg";
import tataTea from "../../static/images/products/beverages/tata-tea.jpg";
import closeUp from "../../static/images/products/beauty-hygiene/closeup.jpg";
import dove from "../../static/images/products/beauty-hygiene/dove.jpg";
import listerine from "../../static/images/products/beauty-hygiene/listerine.jpg";
import shampoo from "../../static/images/products/beauty-hygiene/shampoo.jpg";
import tissues from "../../static/images/products/beauty-hygiene/tissues.jpg";
import bread from "../../static/images/products/bakery-cakes-dairy/bread.jpg";
import paneer from "../../static/images/products/bakery-cakes-dairy/paneer.jpg";
import yogurtBlue from "../../static/images/products/bakery-cakes-dairy/yogurt-blue.jpg";
import yogurtRed from "../../static/images/products/bakery-cakes-dairy/yogurt-red.jpg";
import babyDove from "../../static/images/products/baby/baby-dove.jpg";
import cerelac from "../../static/images/products/baby/cerelac.jpg";
import mamy from "../../static/images/products/baby/mamy.jpg";
import pampers from "../../static/images/products/baby/pampers.jpg";
import redWipes from "../../static/images/products/baby/red-wipes.jpg";
import babyShampoo from "../../static/images/products/baby/shampoo.jpg";
import wipes from "../../static/images/products/baby/wipes.jpg";
import offer1 from "../../static/images/offers/offer1.jpg";
import offer2 from "../../static/images/offers/offer2.jpg";
import offer3 from "../../static/images/offers/offer3.jpg";
import offer4 from "../../static/images/offers/offer4.jpg";
import offer5 from "../../static/images/offers/offer5.jpg";
import babyCat from "../../static/images/category/baby.png";
import bakeryCat from "../../static/images/category/bakery.png";
import beautyCat from "../../static/images/category/beauty.png";
import beveragesCat from "../../static/images/category/beverages.png";
import fruitsCat from "../../static/images/category/fruits.png";

export const CartContext = createContext();
const initalState = {
  items: [],
  visibility: false,
  categories: [],
  images: {
    "/static/images/products/fruit-n-veg/apple.jpg": apple,
    "/static/images/products/fruit-n-veg/capsicum-green.jpg": capsicum,
    "/static/images/products/fruit-n-veg/kiwi-green.jpg": kiwi,
    "/static/images/products/fruit-n-veg/pomegrante.jpg": pomegrante,
    "/static/images/products/fruit-n-veg/tomato.jpg": tomato,
    "/static/images/products/beverages/bournvita.jpg": bournvita,
    "/static/images/products/beverages/coke.jpg": coke,
    "/static/images/products/beverages/red-label.jpg": redLabel,
    "/static/images/products/beverages/tata-tea.jpg": tataTea,
    "/static/images/products/beauty-hygiene/closeup.jpg": closeUp,
    "/static/images/products/beauty-hygiene/dove.jpg": dove,
    "/static/images/products/beauty-hygiene/listerine.jpg": listerine,
    "/static/images/products/beauty-hygiene/shampoo.jpg": shampoo,
    "/static/images/products/beauty-hygiene/tissues.jpg": tissues,
    "/static/images/products/bakery-cakes-dairy/bread.jpg": bread,
    "/static/images/products/bakery-cakes-dairy/paneer.jpg": paneer,
    "/static/images/products/bakery-cakes-dairy/yogurt-blue.jpg": yogurtBlue,
    "/static/images/products/bakery-cakes-dairy/yogurt-red.jpg": yogurtRed,
    "/static/images/products/baby/baby-dove.jpg": babyDove,
    "/static/images/products/baby/cerelac.jpg": cerelac,
    "/static/images/products/baby/mamy.jpg": mamy,
    "/static/images/products/baby/pampers.jpg": pampers,
    "/static/images/products/baby/red-wipes.jpg": redWipes,
    "/static/images/products/baby/shampoo.jpg": babyShampoo,
    "/static/images/products/baby/wipes.jpg": wipes,
    "/static/images/offers/offer1.jpg": offer1,
    "/static/images/offers/offer2.jpg": offer2,
    "/static/images/offers/offer3.jpg": offer3,
    "/static/images/offers/offer4.jpg": offer4,
    "/static/images/offers/offer5.jpg": offer5,
    "/static/images/category/baby.png": babyCat,
    "/static/images/category/bakery.png": bakeryCat,
    "/static/images/category/beauty.png": beautyCat,
    "/static/images/category/beverages.png": beveragesCat,
    "/static/images/category/fruits.png": fruitsCat,
  },
};

function cartReducer(state, action) {
  switch (action.type) {
    case "addItem": {
      const tempArr = cloneDeep(state.items);
      tempArr.push(action.payload);
      return {
        ...state,
        items: tempArr,
      };
    }
    case "removeItem": {
      const tempArr = cloneDeep(state.items);
      const index = tempArr.findIndex((el) => el.id === action.payload.id);
      tempArr.splice(index, 1);
      return {
        ...state,
        items: tempArr,
      };
    }
    case "getCategories": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "changeVisibilty": {
      return {
        ...state,
        visibility: !state.visibility,
      };
    }
    default: {
      return state;
    }
  }
}

const Layout = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initalState);
  const value = { state, dispatch };
  return (
    <CartContext.Provider value={value}>
      {state.visibility && (
        <Cart onClick={() => dispatch({ type: "changeVisibilty" })} />
      )}
      {props.children}
    </CartContext.Provider>
  );
};
export default Layout;
