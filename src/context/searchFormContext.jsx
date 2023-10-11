import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const SearchFormContext = createContext();

function SearchFormProvider({ children }) {
  const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);

  function handleSearchFormToggle() {
    setIsSearchFormOpen((searchForm) => !searchForm);
  }

  return (
    <SearchFormContext.Provider
      value={{ isSearchFormOpen, handleSearchFormToggle }}
    >
      {children}
    </SearchFormContext.Provider>
  );
}

function useSearchForm() {
  const context = useContext(SearchFormContext);
  if (context === undefined)
    throw new Error("CartContext has been used outside of CartProvider");
  return context;
}

export { useSearchForm, SearchFormProvider };
