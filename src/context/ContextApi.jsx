import React, { createContext, useState } from "react";
export const DataContext = createContext();

const ContextApi = (props) => {
  const [cartData, setCartData] = useState([]);

  const contextValues = {
    cartData,
    setCartData,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {props.children}
    </DataContext.Provider>
  );
};

export default ContextApi;
