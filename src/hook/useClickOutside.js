import { useEffect } from "react";
import { useRef } from "react";
import { useCart } from "../context/cartContext";

export default function () {
  const { handleCartToggle } = useCart();
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handleCartToggle();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [handleCartToggle]
  );
  return { ref };
}
