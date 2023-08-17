import { createContext, useContext } from "react";

import React from "react"

const SearchContext=createContext();

export function UseSearchContext() {
    return useContext(SearchContext);
  }
  

  
function SearchProvider({children}) {
    const [searchInput, setSearchInput] = React.useState("");

  return (
  <SearchContext.Provider value={{searchInput,setSearchInput}}>
    {children}
  </SearchContext.Provider>
  )
}

export default SearchProvider
