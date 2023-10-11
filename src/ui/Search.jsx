// Search.jsx

import React from "react";
import { useSearchForm } from "../context/searchFormContext";
import useClickOutside from "../hook/useClickOutside";
import { BiSearch, BiX } from "react-icons/bi";

const Search = () => {
  const { handleSearchFormToggle } = useSearchForm();
  const { ref } = useClickOutside(handleSearchFormToggle);

  return (
    <form className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="absolute top-8 right-8">
        <BiX
          className="text-4xl text-gray-600 cursor-pointer"
          onClick={handleSearchFormToggle}
        />
      </div>
      <div ref={ref} className="flex flex-col items-center">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="search"
          id="search"
          className="p-4 text-gray-900 border-2 border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search Clothes for Male, Female, and Kids"
          required
        />
        <button
          type="submit"
          className="mt-4 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <BiSearch className="w-12 h-4" />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default Search;
