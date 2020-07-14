import React, { createContext, useState } from "react";

const defaultValues = {
  items: 0,
  setItems: () => {},
};

export const CartContext = createContext(defaultValues);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  return (
    <CartContext.Provider
      value={{
        ...defaultValues,
        items,
        setItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
