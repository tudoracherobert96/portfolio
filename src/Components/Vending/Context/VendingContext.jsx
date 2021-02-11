import React, { createContext, useState } from "react";
import { data, cartData } from "../Data/data";

export const VendingContext = createContext();

export const VendingProvider = (props) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(cartData);
  const [money, setMoney] = useState(100);
  return (
    <div>
      <VendingContext.Provider
        value={{
          products,
          setProducts,
          money,
          setMoney,
          cart,
          setCart,
        }}
      >
        {props.children}
      </VendingContext.Provider>
    </div>
  );
};
