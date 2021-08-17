import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setstate] = useState(initialState);
  const addToCart = (payload) => {
    setstate({
      ...state,
      cart: { ...state.cart, payload },
    });
  };
  const removeToCart = (payload) => {
    setstate({
      ...state,
      cart: { ...state.cart.filter((items) => items.id === payload) },
    });
  };

  return {
    addToCart,
    removeToCart,
    state
  }
  
};

export default useInitialState;
