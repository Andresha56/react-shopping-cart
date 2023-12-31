

import React, { createContext, useContext, useState } from "react";

const ItemContext = createContext();

export function UseItemContext() {
  return useContext(ItemContext);
}


export function ItemProvider({ children }) {
  const [selectedItem, setSelectedItems] = useState([]);

  const setItemSelected = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]); 
  };

  return (
    <ItemContext.Provider value={{ selectedItem, setItemSelected }}>
      {children}
    </ItemContext.Provider>
  );
}