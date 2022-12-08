import React, { createContext, useContext, useReducer } from "react";
import {
  getCountTitlesInCart,
  calcSubPrice,
  calcTotalPrice,
} from "./functions";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountTitlesInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_CART_LENGTH":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          titles: [],
          totalPrice: 0,
        })
      );

      cart = {
        titles: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_CART",
      payload: cart,
    });

    dispatch({
      type: "GET_CART_LENGTH",
      payload: getCountTitlesInCart(),
    });
  };

  const addMangaToCart = (manga) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        titles: [],
        totalPrice: 0,
      };
    }

    let newManga = {
      item: manga,
      count: 1,
      subPrice: +manga.price,
    };

    let MangaToFind = cart.titles.filter((elem) => elem.item.id === manga.id);

    if (MangaToFind.length === 0) {
      cart.titles.push(newManga);
    } else {
      cart.titles = cart.titles.filter((elem) => elem.item.id !== manga.id);
    }

    cart.totalPrice = calcTotalPrice(cart.titles);

    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
  };

  const changeMangaCount = (count, id) => {
    if (count < 1) {
      alert("Count of manga can not be negative!");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.titles = cart.titles.map((manga) => {
      if (manga.item.id === id) {
        manga.count = count;
        manga.subPrice = calcSubPrice(manga);
      }
      return manga;
    });

    cart.totalPrice = calcTotalPrice(cart.titles);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
  };

  const deleteMangaInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.titles = cart.titles.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.titles);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  const checkMangaInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let newCart = cart.titles.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };

  const values = {
    addMangaToCart,
    getCart,
    changeMangaCount,
    deleteMangaInCart,
    checkMangaInCart,

    cart: state.cart,
    cartLength: state.cartLength,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
