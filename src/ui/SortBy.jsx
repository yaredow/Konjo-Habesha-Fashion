import React from "react";

function SortBy({ options, value, onChange, type, ...props }) {
  return (
    <div className=" border border-gray-100 justify-center font-custom bg-gray-0 space-x-2 shadow-md shadow-stone-400 items-center rounded-md p-1 flex gap-1">
      <select
        value={value}
        onChange={onChange}
        className={`text-md font-semibold px-4 py-2 font-custom `}
        {...props}
      >
        {options.map((option) => (
          <option
            className=" px-4 py-2"
            value={option.value}
            key={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;
