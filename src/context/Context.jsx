

import React, { createContext, useEffect, useState} from "react";

export const productsList = createContext();

function Context({ children }) {
  const [API_response, setAPIResponse] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAPIResponse(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  return (
    <productsList.Provider value={{ API_response }}>
      {children}
    </productsList.Provider>
  );
}

export default Context;
