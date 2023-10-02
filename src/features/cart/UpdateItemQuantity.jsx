import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(decreaseItemQuantity(id));
        }}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12H4"
          ></path>
        </svg>
      </button>

      <p className="font-custom text-lg inline-block">{currentQuantity}</p>

      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default UpdateItemQuantity;
