import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { 0: item, quantity, totalPrice } = action.payload;

      const updatedCart = [...state, { ...item, quantity, totalPrice }];

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log(updatedCart);

      return updatedCart;

    // const existingItem = state.find(
    //   (item) => item.id === action.payload[0].id
    // );.
    // console.log(existingItem);

    // if (existingItem) {
    //   updatedState = state.map((item) =>
    //     item.id === action.payload.id
    //       ? { ...item, quantity: item.quantity + action.payload.quantity }
    //       : item
    //   );
    // } else {
    //   updatedState = [...state, action.payload];
    // }

    // localStorage.setItem("cart", JSON.stringify(updatedState));
    // return updatedState;

    case "REMOVE_FROM_CART":
      updatedCart = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return [];

    default:
      return cartState;
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
