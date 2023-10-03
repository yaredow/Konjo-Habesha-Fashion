import React, { useState } from "react";
import useClickOutside from "../hook/useClickOutside";

const SortBy = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleCheckboxChange = (event) => {
    // Handle checkbox change logic
  };
  const onClickSort = () => {
    setDropdownOpen(false);
  };
  const { ref } = useClickOutside(onClickSort);

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown-end"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
        onClick={handleToggleDropdown}
      >
        Sort by category
        <svg
          className={`w-4 h-4 ml-2 transition-transform transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        ref={ref}
        className={`origin-bottom left-auto absolute z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </h6>
        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          <li className="flex items-center">
            <input
              id="apple"
              type="checkbox"
              value=""
              onChange={handleCheckboxChange}
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="apple"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Men (56)
            </label>
          </li>
          {/* Repeat similar li items for other checkboxes */}
        </ul>
      </div>
    </div>
  );
};

export default SortBy;
