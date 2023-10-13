import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <div className="border border-gray-100 justify-center  bg-gray-0 space-x-2 shadow-md shadow-stone-400 items-center rounded-md p-1 flex gap-1">
      {options.map((option) => (
        <button
          key={option.label}
          onClick={() => handleClick(option.value)}
          className={`${
            option.value === currentFilter
              ? "bg-blue-500"
              : "bg-gray-0 text-stone-800"
          } rounded-sm text-sm md:text-md font-semibold px-2 md:px-4 py-2 transition-all duration-300 ${
            option.value !== currentFilter &&
            "hover:bg-blue-600 hover:text-brand-50"
          }`}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
